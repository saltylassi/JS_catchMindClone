const socket = io("/");

socket.on("hello", () => {
    console.log("handling hello");
});
