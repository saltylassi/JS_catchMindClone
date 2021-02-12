import { disableChat } from "./chat";
import { disableCanvas, enableCanvas, hideControls, resetCanvas, showControls } from "./paint";

const playBoard = document.getElementById("jsPBoard");
const notifications = document.getElementById("jsNotifications");

const addPlayer = (players) => {
    playBoard.innerHTML = "";
    players.forEach((player) => {
        const playerElement = document.createElement("span");
        playerElement.innerText = `${player.nickname} : ${player.points}`;
        playBoard.appendChild(playerElement);
    });
};

export const handlePlayerUpdate = ({ sockets }) => {
    addPlayer(sockets);
};

const setNotifications = (text) => {
    console.log(text);
    notifications.innerText = "";
    notifications.innerText = text;
};

export const handleGameStarted = () => {
    setNotifications("");
    disableCanvas();
    hideControls();
};

export const handleLeaderNotification = ({ word }) => {
    setNotifications("");
    enableCanvas();
    showControls();
    setNotifications(`당신 차례입니다. 제시어 : ${word}`);
};

export const handleGameEnded = () => {
    setNotifications("Game Ended");
    disableCanvas();
    hideControls();
    resetCanvas();
};

export const handleGameStarting = () => {
    setNotifications("게임이 곧 시작됩니다...");
};
