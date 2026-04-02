#include <Arduino.h>
#include <HCSR04.h>
#include <ESPAsyncWebServer.h>
#include <AsyncTCP.h>
#include <LittleFS.h> // failsafe
#include <ArduinoJson.h>


// set up server for the esp32, use port 80, name it ws
AsyncWebServer server(80);
AsyncWebSocket webSocket("/ws");


// put function declarations here:
int myFunction(int, int);

// WebSocket listener function
void onWebSocketEvent(AsyncWebSocket *server, AsyncWebSocketClient *client, AwsEventType type,
               void *arg, uint8_t *data, size_t len) {
                
  if (type == WS_EVT_CONNECT) {     // on connect
    Serial.println("Browser connected to WebSocket!"); 
    client->text("{\"status\":\"ok\"}"); // test json message
  }
}

void setup() {
  Serial.begin(115200);                       // esp32 can read at 115200 bps
  WiFi.begin("iPhone", "tset2sdkt5q4");         // 
  while (WiFi.status() != WL_CONNECTED) {     // yield until wifi connected
    delay(500);
    Serial.print("."); 
  }
  // print when connected
  String connectMessage = "\nConnected! IP address: " + WiFi.localIP().toString();
  Serial.println(connectMessage);

  // check littleFS begin
  if(!LittleFS.begin()) {
    Serial.println("LittleFS Mount Failed");
    return;
  }

  // connect webSocket listerner
  webSocket.onEvent(onWebSocketEvent);

  // connect websocket object to server
  server.addHandler(&webSocket);
  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){ // send html files to client
    request->send(LittleFS, "/index.html", "text/html");
  });
  server.serveStatic("/", LittleFS, "/");  // fail safe functions, checks in memory for requests that exist
  server.begin();
  //setup 

}


void loop() {
  webSocket.cleanupClients();
}

// put function definitions here:
int myFunction(int x, int y) {
  return x + y;
}

