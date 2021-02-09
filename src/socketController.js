import events from "./events";

const socketController = (socket) => {
    socket.on(events.setNickname, (nickname) => {
        socket.nickname = nickname;
        console.log(events);
        socket.broadcast.emit(events.newUser, { nickname });
    });
};

export default socketController;
