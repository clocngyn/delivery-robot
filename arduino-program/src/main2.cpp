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
    char header = Serial2.read(); // looks at first byte of the line
    
    // listens for drive commands which are 1 char
    if (strchr("FBRLS", header)) { // strchr() returns as truthy value if the 2nd param is in the string
      drive(header);
    // listens for speed changes
    } else if (header == 'S') {
        int Speed = Serial2.parseInt();
        setSpeed(Speed);
    }
    
    
  }
}



