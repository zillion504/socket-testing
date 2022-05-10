

// Create a WebSocket connection to the server...
const socket = new WebSocket(`ws://${document.domain}:8001`)
console.log("Connecting to server...")

// When the server sends us a message, update our color to their message.
socket.onmessage = (m) => {
	setColor(m.data)
}

// When we successfully connect, print out "connected!"
socket.onopen = () => {
	console.log("connected!")
}

// Function for setting the color
function setColor(color) {
	console.log("setting color to:", color);

	// Find the body element, and set its className to whatever color we chose.
	// This will change its color because of the styles defined in styles.css
	document.getElementsByTagName("body")[0].className = color;
}

// When the page loads, start listen for clicks on the buttons
window.addEventListener("load", () => {
	// For each color, set up the button.
	for (const color of ["blue", "red", "green", "yellow"]) {

		// When the button is clicked....
		document.getElementById(color).addEventListener("click", () => {
			// Set the color to the button color
			setColor(color);

			// Tell the server to update the current color.
			socket.send(color);
		});
	}
});