#include "robot.h"
#include "motordriver.h"

int driveSpeed = 0;
String robotDriveState = "STOP";
String testString = "";


void setup() {
  Serial.begin(115200);                       // esp32 can read at 115200 bps
  initMotorDriver();
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
  
  Serial.println("Setup done");
}


void loop() {
  webSocket.cleanupClients();     // cleans up disconnected clients

  /*if sensor too cllose, set speed lower
      temp codeee
  */ 
  driveSpeed = 255;
  static String lastDriveState; // records the last state

  // since we recorded the last drive state,
  // this block will only run when the state changes instead of every tick
  if (robotDriveState != lastDriveState) {
    Serial.println(robotDriveState);
    if (robotDriveState != "STOP") {
      drive(robotDriveState);
    } else {
      stop();
    }
    lastDriveState = robotDriveState; //update state
  }
  //Serial.println(testString);
  delay(100);

  
}




