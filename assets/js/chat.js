import { getSocket } from "./sockets";

const messages = document.getElementById("jsMessages");
const msgForm = document.getElementById("jsSendMsg");

const appendMsg = (text, nickname) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="author ${nickname ? "out" : "self"}">${nickname ? nickname : "you"}:</span> ${text}
    `;
    messages.appendChild(li);
};

const handleSendMsg = (event) => {
    event.preventDefault();
    const input = msgForm.querySelector("input");
    const { value } = input;
    getSocket().emit(window.events.sendMsg, { message: value });
    input.value = "";
    appendMsg(value);
};

export const handleNewMsg = ({ message, nickname }) => {
    return appendMsg(message, nickname);
};

if (msgForm) {
    msgForm.addEventListener("submit", handleSendMsg);
}
