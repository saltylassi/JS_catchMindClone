const playBoard = document.getElementById("jsPBoard");

const addPlayer = (players) => {
    players.forEach((player) => {
        playBoard.innerHTML = "";
        const playerElement = document.createElement("span");
        playerElement.innerText = `${player.nickname} : ${player.points}`;
        playBoard.appendChild(playerElement);
    });
};

export const handlePlayerUpdate = ({ sockets }) => {
    addPlayer(sockets);
};

export const handleGameStarted = () => {};
