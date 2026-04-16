// ws://127.0.0.1/    <-- local host for testing
const gateway = `ws://${window.location.hostname}/ws`;   // opens the websocket using the ip of the html file
let websocket;                                      // which is coming from the esp32


window.addEventListener("load", onLoad)

let map;
let robotMarker;
let mapStart = false;
// call on load
function onLoad() {
    initWebSocket()
    initMap()
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
    const data = JSON.parse(message.data);  // parse the data for easy use

    
                                           
    if (data.lat && data.lng && data.lat !== 0) {                 // if we get the data
        const newPos = [data.lat, data.lng];    // make pos
        if (!mapStart) {                        // check we havent run this before
            map.setView(newPos, 18);            // sets view close to our location
            mapStart = true;
        }
        robotMarker.setLatLng(newPos);          // 
    }

    // set our telemetry elements
    document.getElementById('rssiVal').innerText        = data.wifi;
    document.getElementById('satVal').innerText         = data.sats;
    document.getElementById('statusValF').innerText     = data.safe ? "SAFE"    : "BLOCKED";
    document.getElementById('statusValF').style.color   = data.safe ? "green"   : "red";
    document.getElementById('statusValB').innerText     = data.safe ? "SAFE"    : "BLOCKED";
    document.getElementById('statusValB').style.color   = data.safe ? "green"   : "red";
    
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

function initMap() {
    // 1. Initialize map on the 'map' div
    map = L.map('map').setView([0, 0], 2); 

    // 2. Load OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // 3. Create the robot marker (start at 0,0)
    robotMarker = L.marker([0, 0]).addTo(map);
}

function initSensorToggle() {
    SensorsOn = true;

    const overrideButton = document.getElementById(overrideButton);
                                // flip sensors and send state
    const pressButton = () => {
        SensorsOn = !SensorsOn; 
        if (SensorsOn) {
            overrideButton.classList.remove('active');
            websocket.send('O'); // big O = safety on
        } else {
            overrideButton.classList.add('active');
            websocket.send('o');
        }
        websocket.send(SensorsOn); // websocket.send() sends whats in the parenthesis
    }
    overrideButton.ontouchstart = pressButton;
    
}