const path = require("path");
const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const socketio = require("socket.io");
const io = socketio(server, { cors: { origin: "*" } });

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
  console.log("user connected", socket.id);

  socket.on("message", (data) => {
    console.log(data);
    socket["gxQnQH5wQ8Z1fW8NAAAD"].emit("message", data);
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
