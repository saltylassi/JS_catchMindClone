import { handleDisconnected, handleNewUser } from "./notifications";

let socket = null;

export const getSocket = () => {
    return socket;
};

export const updateSocket = (socket1) => {
    return (socket = socket1);
};

export const initSockets = (socket1) => {
    const { events } = window;
    updateSocket(socket1);
    socket1.on(events.newUser, handleNewUser);
    socket1.on(events.disconnected, handleDisconnected);
};
