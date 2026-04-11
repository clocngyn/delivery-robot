#include "robot.h"

int driveSpeed = 0;
char robotDriveState = 'S';
String testString = "";

// helper to send change and send all drive state references
void changeDriveState(char robotDriveState, char &lastDriveState) {
  Serial.println(robotDriveState);        // just for confirmation on esp1 serial monitor
  Serial2.print(robotDriveState);         // printing to serial 2 sends the actual char to esp2
  lastDriveState = robotDriveState;       //update state
}


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

  // these 2 lines are needed for esp2 to understand this is a speed command
  Serial2.print('S');     // S is for speed, esp receives these 2 lines as  
  Serial2.println(255);   // S225\n, can read up to \n and see the S
  
  static char lastDriveState = 'S'; // records the last state
  // changes drive direction
  if (canDrive) {
    if (robotDriveState != lastDriveState) {  // check for changes to prevent throttling
      changeDriveState(robotDriveState, lastDriveState);
    }
  } else if (robotDriveState != 'S') {
    char Stop = 'S';
    changeDriveState(Stop, lastDriveState);

  }
  
  //Serial.println(testString);
  delay(20); 
}



