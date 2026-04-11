#include "robot.h"
#include "motordriver.h"

int driveSpeed = 255;

void setup() {
  Serial.begin(115200);                       // esp32 can read at 115200 bps
  Serial2.begin(115200, SERIAL_8N1, 16, 17);  // opens the 2nd serial port
  initMotorDriver();
  
  Serial.println("ESP2 Setup done");
}


void loop() {
 if (Serial2.available() > 0) {
    char incomingByte = Serial2.read();
    
    // listens for drive commands
    if (strchr("FBRLS", incomingByte)) {
      drive(incomingByte);
    }
  }
}



