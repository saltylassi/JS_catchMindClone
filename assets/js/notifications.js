import events from "../../src/events";

const notifications = document.getElementById("jsNotifications");

const fireNotification = (text, color) => {
    const notification = document.createElement("div");
    notification.innerText = text;
    notification.style.backgroundColor = color;
    notification.className = "notification";
    notifications.appendChild(notification);
};

export const handleNewUser = ({ nickname: { nickname } }) => {
    fireNotification(`${nickname} joined`, "rgb(0,122,255)");
};

export const handleDisconnected = ({ nickname: { nickname } }) => {
    fireNotification(`${nickname} left`, "rgb(255,149,0");
};
