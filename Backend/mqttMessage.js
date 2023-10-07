
const mongoose = require("mongoose");

const mqttMessageSchema = new mongoose.Schema({
  topic: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("MqttMessage", mqttMessageSchema);
