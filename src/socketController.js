import events from "./events";
import { chooseWord } from "./words";

let sockets = [];
let inProgress = false;
let word = null;
let leader = null;

const chooseLeader = () => {
    let index;
    while (1) {
        index = Math.floor(Math.random() * sockets.length);
        if (index !== sockets.length) {
            break;
        }
    }
    return sockets[index];
};

const socketController = (socket, io) => {
    const broadcast = (event, data) => socket.broadcast.emit(event, data);
    const superBroadcast = (event, data) => {
        //나를 포함한 전부에게 broadcast
        io.emit(event, data);
    };

    const sendPlayerUpdate = () => {
        superBroadcast(events.playerUpdate, { sockets });
    };

    const startGame = () => {
        if (inProgress === false) {
            inProgress = true;
            leader = chooseLeader();
            word = chooseWord();
            superBroadcast(events.gameStarting);
            setTimeout(() => {
                superBroadcast(events.gameStarted);
                io.to(leader.id).emit(events.leaderNotification, { word });
            }, 2000);
        }
    };

    const endGame = () => {
        inProgress = false;
        superBroadcast(events.gameEnded);
    };

    const addPoints = (id) => {
        sockets = sockets.map((clientSocket) => {
            if (clientSocket.id === id) {
                clientSocket.points += 1;
            }
            return clientSocket;
        });
        sendPlayerUpdate();
        endGame();
    };

    socket.on(events.setNickname, ({ nickname }) => {
        socket.nickname = nickname;
        sockets.push({ id: socket.id, points: 0, nickname: nickname });
        broadcast(events.newUser, { nickname });
        sendPlayerUpdate();
        if (sockets.length > 2) {
            startGame();
        }
    });

    socket.on(events.disconnect, () => {
        sockets = sockets.filter((clinetSocket) => {
            return socket.id !== clinetSocket.id;
        });
        if (sockets.length < 3) {
            endGame();
        } else if (leader && leader.id === socket.id) {
            endGame();
        }
        broadcast(events.disconnected, { nickname: socket.nickname });
        sendPlayerUpdate();
    });

    socket.on(events.sendMsg, ({ message }) => {
        broadcast(events.newMsg, { message, nickname: socket.nickname });
        if (message === word) {
            superBroadcast(events.newMsg, { message: `정답 : ${word}, 정답자 : ${socket.nickname}`, nickname: "알림" });
            addPoints(socket.id);
        }
    });

    socket.on(events.beginPath, ({ x, y }) => {
        broadcast(events.beganPath, { x, y });
    });

    socket.on(events.strokePath, ({ x, y, color }) => {
        broadcast(events.strokedPath, { x, y, color });
    });

    socket.on(events.fill, ({ color }) => {
        broadcast(events.filled, { color });
    });
};

export default socketController;
