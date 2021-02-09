import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";
import socketController from "./socketController";
import events from "./events";

const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));

app.get("/", (req, res) =>
    res.render("home", {
        events: JSON.stringify(events),
    })
); //클라이언트측 템플릿(pug파일)에서 events객체를 사용할 수 있도록 전달함

const handleListening = () => console.log(`http://localhost:${PORT}`);

const server = app.listen(PORT, handleListening);

const io = socketIO(server);

io.on("connection", (socket) => {
    // console.log(socket);
    return socketController(socket);
});
