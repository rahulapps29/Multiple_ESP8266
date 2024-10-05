const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;
const path = require("path");
const cors = require("cors");
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
// Replace these with the actual IP addresses of your ESP8266 devices
const DEVICE_1_IP = "http://192.168.29.183"; // IP of ESP8266 Device 1
const DEVICE_2_IP = "http://192.168.29.90"; // IP of ESP8266 Device 2

// Turn on relay on Device 1
app.get("/relay1/on", async (req, res) => {
  try {
    const response = await axios.get(`${DEVICE_1_IP}/relay/on`);
    res.send("Relay on Device 1 is ON");
  } catch (error) {
    console.error("Error turning on relay 1:", error);
    res.status(500).send("Error turning on relay 1");
  }
});

// Turn off relay on Device 1
app.get("/relay1/off", async (req, res) => {
  try {
    const response = await axios.get(`${DEVICE_1_IP}/relay/off`);
    res.send("Relay on Device 1 is OFF");
  } catch (error) {
    console.error("Error turning off relay 1:", error);
    res.status(500).send("Error turning off relay 1");
  }
});

// Turn on relay on Device 2
app.get("/relay2/on", async (req, res) => {
  try {
    const response = await axios.get(`${DEVICE_2_IP}/relay/on`);
    res.send("Relay on Device 2 is ON");
  } catch (error) {
    console.error("Error turning on relay 2:", error);
    res.status(500).send("Error turning on relay 2");
  }
});

// Turn off relay on Device 2
app.get("/relay2/off", async (req, res) => {
  try {
    const response = await axios.get(`${DEVICE_2_IP}/relay/off`);
    res.send("Relay on Device 2 is OFF");
  } catch (error) {
    console.error("Error turning off relay 2:", error);
    res.status(500).send("Error turning off relay 2");
  }
});

// Turn on both relays
app.get("/relay/both/on", async (req, res) => {
  try {
    // Send requests to both devices
    const device1Response = await axios.get(`${DEVICE_1_IP}/relay/on`);
    const device2Response = await axios.get(`${DEVICE_2_IP}/relay/on`);
    res.send("Both relays are ON");
  } catch (error) {
    console.error("Error turning on both relays:", error);
    res.status(500).send("Error turning on both relays");
  }
});

// Turn off both relays
app.get("/relay/both/off", async (req, res) => {
  try {
    // Send requests to both devices
    const device1Response = await axios.get(`${DEVICE_1_IP}/relay/off`);
    const device2Response = await axios.get(`${DEVICE_2_IP}/relay/off`);
    res.send("Both relays are OFF");
  } catch (error) {
    console.error("Error turning off both relays:", error);
    res.status(500).send("Error turning off both relays");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
