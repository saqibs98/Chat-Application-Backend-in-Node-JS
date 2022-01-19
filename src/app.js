const path = require("path");
const bodyParser = require("body-parser");
const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const { emit } = require("process");
const socketio = require("socket.io");
const db = require("./queries");

const server = http.createServer(app);
const io = socketio(server, { cors: { origin: "*" } });

const PORT = process.env.PORT || 3000;
const socketPort = 8000;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// sends out the 10 most recent messages from recent to old
const emitMostRecentMessges = () => {
  db.getSocketMessages()
    .then((result) => io.emit("chat message", result))
    .catch(console.log);
};

app.get("/", (request, response) => {
  response.json({ info: "Our app is up and running" });
});

// Add to the bottom
app.get("/messages", db.getMessages);
app.post("/messages", db.createMessage);

// connects, creates message, and emits top 10 messages
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("chat message", (msg) => {
    db.createSocketMessage(JSON.parse(msg))
      .then((_) => {
        emitMostRecentMessges();
      })
      .catch((err) => io.emit(err));
  });

  // close event when user disconnects from app
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

// io.on("connection", (socket) => {
//   console.log("user connected", socket.id);

//   socket.on("message", (data) => {
//     console.log(data);
//     socket["gxQnQH5wQ8Z1fW8NAAAD"].emit("message", data);
//   });
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Displays in terminal which port the socketPort is running on
server.listen(socketPort, () => {
  console.log(`listening on *:${socketPort}`);
});
