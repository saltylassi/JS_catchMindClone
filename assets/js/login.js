import { initSockets } from "./sockets";

const body = document.querySelector("body");
const loginForm = document.getElementById("jsLogin");

const nickname = localStorage.getItem("nickname");

const LOGGED_OUT = "loggedOut";
const LOGGED_IN = "loggedIn";

const login = (nickname) => {
    const socket = io("/"); //연결
    socket.emit(window.events.setNickname, { nickname });
    initSockets(socket);
};

if (nickname === null) {
    body.className = LOGGED_OUT;
} else {
    body.className = LOGGED_IN;
    login(nickname);
}

const handleLogin = (event) => {
    event.preventDefault();
    const input = loginForm.querySelector("input");

    localStorage.setItem("nickname", input.value);
    body.className = LOGGED_IN;
    login(input.value);
    input.value = "";
};

if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
}
