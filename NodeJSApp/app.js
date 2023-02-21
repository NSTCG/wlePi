const express = require("express");

const app = express();
const cors = require("cors");
app.use(cors());

//enable gpio on the pi
const Gpio = require("onoff").Gpio;
const LED = new Gpio(13, "out");
app.get("/led/:status", (req, res) => {
	const status = req.params.status;
	if (status == "on") {
		LED.writeSync(1);
		res.send("LED turned on");
	} else if (status === "off") {
		LED.writeSync(0);
		res.send("LED turned off");
	} else {
		res.send("invalid status");
	}
});

app.use(express.static(__dirname + "/WonderlandPi/deploy/"));
//run index.html on the server
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/WonderlandPi/deploy/index.html");
});

//run index.html on the server when the user goes to /home
app.get("/home", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});



const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};

https.createServer(options, app).listen(3000, () => {
  console.log('Server started on port 3000');
});
