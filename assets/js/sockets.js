import { handleNewMsg } from "./chat";
import { handleDisconnected, handleNewUser } from "./notifications";
import { handleBeganPath, handleFilled, handleStrokedPath } from "./paint";
import { handlePlayerUpdate } from "./players";

let socket = null;

export const getSocket = () => {
    return socket;
};

export const initSockets = (clientSocket) => {
    const { events } = window;
    socket = clientSocket;
    clientSocket.on(events.newUser, handleNewUser);
    clientSocket.on(events.disconnected, handleDisconnected);
    clientSocket.on(events.newMsg, handleNewMsg);
    clientSocket.on(events.beganPath, handleBeganPath);
    clientSocket.on(events.strokedPath, handleStrokedPath);
    clientSocket.on(events.filled, handleFilled);
    clientSocket.on(events.playerUpdate, handlePlayerUpdate);

    //주의
    //핸들러에서 받는 인자는 비구조화 후 key값으로 검사하기때문에 일치해야함
    //매개변수가 아님
};
