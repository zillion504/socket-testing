const http = require("http");
const fs = require("fs");
const path = require("path");
const ws = require("ws");

// Server settings
const hostname = "0.0.0.0";
const port = 8000;
const socketPort = 8001;

// State variables
var connections = [];
var currentColor = "blue";


// Serve the public folder!
const server = http.createServer((req, res) => {
	const filePath = path.join(__dirname, "public", req.url);
	fs.readFile(filePath, "utf-8", (error, data) => {
		if (!error) {
			res.write(data);
			res.end();
		} else {
			res.write("Error occurred!");
			res.end();
		}
	});
});

// Start the server.
server.listen(port, hostname, () => console.log(`Started server on port ${port}`));

// Change the color state.
function setColor(color) {
	console.log("new color:", color);
	// Send the new color state to all connected clients.
	for (var c of connections) {
		c.send(color);
	}
	// Updated stored color state.
	currentColor = color;
}

// Create a socket server for clients to connect to.
const socket = new ws.WebSocketServer({ port: socketPort, host: hostname })

// Whenever we get a new connection
socket.on("connection", (c) => {
	console.log("Client connected!")
	
	c.send(currentColor) // Inform client of the current color state.
	
	connections.push(c); // Add connection to our list of current connections.

	// Whenever we receive a message, set the color state to the message received.
	c.on("message", (m) => {
		setColor(m.toString());
	});

	// When a client disconnects, remove them from our list of current connections
	c.on("close", () => {
		console.log("Client disconnected!")
		// Override connections array with a filtered array which includes all but their connection
		connections = connections.filter(val => val != c);
	})
});
