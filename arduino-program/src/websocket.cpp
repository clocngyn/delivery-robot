#include "robot.h"


AsyncWebServer server(80);          // declare server using port 80
AsyncWebSocket webSocket("/ws");    // declare an AsyncWebSocket object with the address "/ws"

// WebSocket listener function
// when signals are sent from websocket.js they are heard here

void onWebSocketEvent(AsyncWebSocket *server, AsyncWebSocketClient *client, AwsEventType type,
               void *arg, uint8_t *data, size_t len) {

  if (type == WS_EVT_CONNECT) {                           // on connect
    Serial.println("Browser connected to WebSocket!"); 
    client->text("{\"status\":\"ok\"}");                  // test json message
  } else if (type == WS_EVT_DATA) {
    String command = "";                // data is sent as raw bytes so this loop
    for (size_t i = 0; i < len; i++) {  // assembles the data back into a string
        command += (char)data[i];
    }
    command.trim(); // clean the string just in case
    robotDriveState = command;
    //Serial.println("raw data: "); test
    //Serial.print(command);
    }
  
}


void webSocketInit();


// init function is called once setting up
void webSocketInit(){
  // connect webSocket listener
  webSocket.onEvent(onWebSocketEvent);

  // connect websocket object to server
  server.addHandler(&webSocket);

  // these server.on functions listen for a request from a client (our phone or computer)
  // and then send backs the files it asks for
  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){  // if someone requests the root page, "/"
    request->send(LittleFS, "/index.html", "text/html");        // send the html page, (littleFS, htmlpage, filetype)
  });

  server.on("/style.css", HTTP_GET, [](AsyncWebServerRequest *request){ // reqs style.css
    request->send(LittleFS, "/style.css", "text/css");
  });

  server.on("/websocket.js", HTTP_GET, [](AsyncWebServerRequest *request){  // req websocket.js, return our script
    request->send(LittleFS, "/script/websocket.js", "text/javascript");
});

  server.serveStatic("/", LittleFS, "/");  // fail safe, if indexing file that does not exist, check littleFS
  server.begin();
}
