// This will be our application entry. We'll setup our server here.
import http from "http";
import  socketio from "socket.io";
import app from "./app"; // The express app we just created


const port = 8000;

app.set("port", port);

const server = http.createServer(app);

//const io = socketio(server, { cors: { origin: "*" } });

//chat(io);
server.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
