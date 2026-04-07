// ws://127.0.0.1/    <-- local host for testing
const ws = "ws://${window.location.hostname}/ws";   // opens the websocket using the ip of the html file
let websocket;                // which is coming from the esp32


window.addEventListener("load", onLoad)

// call on load
function onLoad() {
    initWebSocket()
    // load the map
    // load the controls
}



// initalize websocket and listeners
function initWebSocket() {
    websocket = new WebSocket(gateway); // make websocket after website loaded


    // connect listeners
    websocket.onopen        = onOpen;
    websocket.onclose       = onClose;
    websocket.onmessage     = onMessage;
}


function onOpen(event) {
    console.log("Websocket opened!")
}

function onClose(event) {
    console.log("Websocket closed!")
}

function onMessage(message) {
    const data = JSON.parse(message.data);  // parse the data to easily index it,
                                            // since we are using multiple sensors.

    console.log(data.status);
}