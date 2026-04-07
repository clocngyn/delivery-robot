#include "robot.h"


AsyncWebServer server(80);          // declare server using port 80
AsyncWebSocket webSocket("/ws");    // declare an AsyncWebSocket object with the address "/ws"

// WebSocket listener function
void onWebSocketEvent(AsyncWebSocket *server, AsyncWebSocketClient *client, AwsEventType type,
               void *arg, uint8_t *data, size_t len) {

  if (type == WS_EVT_CONNECT) {                           // on connect
    Serial.println("Browser connected to WebSocket!"); 
    client->text("{\"status\":\"ok\"}");                  // test json message
  }
}

void webSocketInit();


void webSocketInit(){
  

  // connect webSocket listener
  webSocket.onEvent(onWebSocketEvent);

  // connect websocket object to server
  server.addHandler(&webSocket);

  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){  // if someone requests the root page, "/"
    request->send(LittleFS, "/index.html", "text/html");        // send the html page, (littleFS, htmlpage, filetype)
  });

  server.on("/style.css", HTTP_GET, [](AsyncWebServerRequest *request){ // gets css file while the html runs
    request->send(LittleFS, "/style.css", "text/css");
  });

  server.serveStatic("/", LittleFS, "/");  // fail safe, if indexing file that does not exist, check littleFS
  server.begin();
}
