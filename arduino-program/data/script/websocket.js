// ws://127.0.0.1/    <-- local host for testing
const ws = "ws://${window.location.hostname}/ws";   // opens the websocket using the ip of the html file
let websocket;                                      // which is coming from the esp32


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

// binds the dpad to websocket
function initControls() {
    const directions = { // dictionary of directions key : value, ex. indexing up will return forward
        'up': 'FORWARD',
        'down': 'BACKWARD',
        'left': 'LEFT',
        'right': 'RIGHT'
    };

    // for every element in directions, for every id (up, down, etc), find that button and set the functionality
    Object.keys(directions).forEach(id => {
        const button = document.getElementById(id);
        const startMove = () => websocket.send(directions[id]);
        const stopMove = () => websocket.send('STOP');

        button.onmousedown = startMove;
        button.ontouchstart = startMove; 

        button.onmouseup = stopMove;
        button.ontouchend = stopMove;
    });
}