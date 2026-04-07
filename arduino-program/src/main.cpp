#include <Arduino.h>
#include <HCSR04.h>                   // ultrasonic sensor
#include <ESPAsyncWebServer.h>
#include <AsyncTCP.h>
#include <LittleFS.h>                 // fail safe and data management system
#include <ArduinoJson.h>              



AsyncWebServer server(80);          // declare server using port 80
AsyncWebSocket webSocket("/ws");    // declare an AsyncWebSocket object with the address "/ws"


// put function declarations here:
int myFunction(int, int);

// WebSocket listener function
void onWebSocketEvent(AsyncWebSocket *server, AsyncWebSocketClient *client, AwsEventType type,
               void *arg, uint8_t *data, size_t len) {

  if (type == WS_EVT_CONNECT) {                           // on connect
    Serial.println("Browser connected to WebSocket!"); 
    client->text("{\"status\":\"ok\"}");                  // test json message
  }
}

void setup() {
  Serial.begin(115200);                       // esp32 can read at 115200 bps
  WiFi.begin("iPhone", "tset2sdkt5q4");         
  while (WiFi.status() != WL_CONNECTED) {     // yield until wifi connected
    delay(500);
    Serial.print("."); 
  }
  // print when connected
  String connectMessage = "\nConnected! IP address: " + WiFi.localIP().toString();
  Serial.println(connectMessage);

  // begin littleFS
  if(!LittleFS.begin()) {
    Serial.println("LittleFS Mount Failed");
    return;
  }

  // connect webSocket listener
  webSocket.onEvent(onWebSocketEvent);

  // connect websocket object to server
  server.addHandler(&webSocket);
  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){  // if someone requests the root page, "/"
    request->send(LittleFS, "/index.html", "text/html");        // send the html page, (littleFS, htmlpage, filetype)
  });

  server.serveStatic("/", LittleFS, "/");  // fail safe, if indexing file that does not exist, check littleFS
  server.begin();
  

}


void loop() {
  webSocket.cleanupClients();     // cleans up disconnected clients
}

// put function definitions here:
int myFunction(int x, int y) {
  return x + y;
}

