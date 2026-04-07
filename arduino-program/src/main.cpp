#include "robot.h"




// put function declarations here:
int myFunction(int, int);



void setup() {
  Serial.begin(115200);                       // esp32 can read at 115200 bps
  WiFi.begin("iPhone", "tset2sdkt5q4");       // (wifi name, password)
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
  webSocketInit();
  

}


void loop() {
  webSocket.cleanupClients();     // cleans up disconnected clients
}



// put function definitions here:
int myFunction(int x, int y) {
  return x + y;
}

