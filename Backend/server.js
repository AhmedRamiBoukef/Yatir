const express = require("express");
const mqtt = require("mqtt");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const http = require("http").Server(app);

app.use(cors());

const client = mqtt.connect("mqtt://13.38.173.241:1883");

app.use(bodyParser.urlencoded({ extended: true }));

const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:5173",
  },
});

const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://mc9:rami@cluster0.j3tbtrp.mongodb.net/mqtt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

client.on("connect", function () {
  client.subscribe("#", function (err) {
    if (!err) console.log("Subscribed to uav requests");
  });
});
client.on("message", async function (topic, message) {
  var someEncodedString = Buffer.from(message, "utf-8").toString();
  if (topic.startsWith("uav1") || topic.startsWith("uav2")) {
    const MqttMessage = require("./mqttMessage"); 
    const mqttMessage = new MqttMessage({
      topic: topic,
      message: someEncodedString,
    });
    socketIO.emit(topic, someEncodedString);
    try {
      await mqttMessage.save();
    } catch (error) {
      console.log(error);
    }
  }
});

http.listen(5000, () => {
  console.log("Server listening on port 5000");
});
