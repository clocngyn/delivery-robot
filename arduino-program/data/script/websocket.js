// ws://127.0.0.1/    <-- local host for testing
const gateway = `ws://${window.location.hostname}/ws`;   // opens the websocket using the ip of the html file
let websocket;                                      // which is coming from the esp32


window.addEventListener("load", onLoad)

// call on load
function onLoad() {
    initWebSocket()
    // load the map
    // load the controls
}



// initalize websocket and listeners
// this is called when 
function initWebSocket() {
    websocket = new WebSocket(gateway); // make websocket after website loaded

    

    // connect listeners
    websocket.onopen        = onOpen;
    websocket.onclose       = onClose;
    websocket.onmessage     = onMessage;
}


function onOpen(event) {
    console.log("Websocket opened!")
    initControls();
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
        'up'        : 'F',
        'down'      : 'B',
        'left'      : 'L',
        'right'     : 'R'
    };

    // for every element in directions, for every id (up, down, etc), find that button and set the functionality
    Object.keys(directions).forEach(id => {
        const button = document.getElementById(id);
        const startMove = () => websocket.send(directions[id]); // websocket.send() sends whats in the parenthesis
        const stopMove = () => websocket.send('S');          // to the listener in websocket.cpp

        button.onmousedown = startMove;
        button.ontouchstart = startMove; 

        button.onmouseup = stopMove;
        button.ontouchend = stopMove;
    });
}