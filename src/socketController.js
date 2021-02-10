import events from "./events";

let sockets = [];

const socketController = (socket, io) => {
    const broadcast = (event, data) => socket.broadcast.emit(event, data);
    const superBroadcast = (event, data) => {
        //나를 포함한 전부에게 broadcast
        io.emit(event, data);
    };
    const sendPlayerUpdate = () => {
        superBroadcast(events.playerUpdate, { sockets });
    };

    socket.on(events.setNickname, ({ nickname }) => {
        socket.nickname = nickname;
        sockets.push({ id: socket.id, points: 0, nickname: nickname });
        broadcast(events.newUser, { nickname });
        sendPlayerUpdate();
    });
    socket.on(events.disconnect, () => {
        sockets = sockets.filter((clinetSocket) => {
            return socket.id !== clinetSocket.id;
        });
        broadcast(events.disconnected, { nickname: socket.nickname });
        sendPlayerUpdate();
    });
    socket.on(events.sendMsg, ({ message }) => {
        console.log(message);
        broadcast(events.newMsg, { message, nickname: socket.nickname });
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
