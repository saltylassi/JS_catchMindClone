export const handleMessageNotification = (data) => {
    const { message, nickname } = data;
    console.log(`${nickname} : ${message}`);
};
