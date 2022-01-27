// This will be our application entry. We'll setup our server here.
const http = require("http");
const socketio = require("socket.io");
const app = require("../app"); // The express app we just created
const chat = require("../socket");

const port = parseInt(process.env.PORT, 10) || 8000;

app.set("port", port);

const server = http.createServer(app);

const io = socketio(server, { cors: { origin: "*" } });

chat(io);
server.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
