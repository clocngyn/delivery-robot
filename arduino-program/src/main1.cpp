#include "robot.h"

int driveSpeed = 0;
char robotDriveState = 'S';
String testString = "";


void setup() {
  Serial.begin(115200);                       // esp32 can read at 115200 bps
  Serial2.begin(115200, SERIAL_8N1, 16, 17);  // opens the 2nd serial port




  WiFi.begin("iPhone", "tset2sdkt5q4");       // (wifi name, password)
  while (WiFi.status() != WL_CONNECTED) {     // yield until wifi connected
    delay(500);
    Serial.print("."); 
  }
  // print when connected
  String connectMessage = "\nConnected! IP address: " + WiFi.localIP().toString();
  Serial.println(connectMessage);

  // begin littleFS
  if(!LittleFS.begin(true)) {
    Serial.println("LittleFS Mount Failed");
  } else {
    Serial.println("LittleFS Mount Success");
  }
  webSocketInit();
  
  Serial.println("Setup done");
}


void loop() {
  webSocket.cleanupClients();     // cleans up disconnected clients

  /*if sensor too cllose, set speed lower
      temp codeee
  */ 
  driveSpeed = 255;
  static char lastDriveState = 'S'; // records the last state

  // changes drive direction
  if (robotDriveState != lastDriveState) {  // check for changes to prevent throttling
    Serial.println(robotDriveState);        // just for confirmation on esp1 serial monitor
    Serial2.print(robotDriveState);         // printing to serial 2 sends the actual char to esp2
    
    lastDriveState = robotDriveState;       //update state
  }
  //Serial.println(testString);
  delay(100);

  
}


