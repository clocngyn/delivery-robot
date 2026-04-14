//#include "robot.h"
#include "motordriver.h"

int driveSpeed = 255;

void setup() {
  pinMode(2, OUTPUT);

  //Serial.begin(115200);                       // esp32 can read at 115200 bps
  // (rx, tx)
  Serial2.begin(9600, SERIAL_8N1, 17, 16);  // opens the 2nd serial port
  initMotorDriver();
  
  Serial.println("ESP2 Setup done");
}


void loop() {
 if (Serial2.available() > 0) {
    char header = Serial2.read(); // looks at first byte of the line
    if (isPrintable(header)) { 
      Serial.print("Received: ");
      Serial.println(header);
      
      
      // listens for drive commands which are 1 char
      if (strchr("FBRLS", header)) { // strchr() returns as truthy value if the 2nd param is in the string
        drive(header);
        digitalWrite(2, HIGH);
        delay(1000);
        digitalWrite(2, LOW);
      // listens for speed changes
      } else if (header == 'V') {
        digitalWrite(2, HIGH); 
        delay(10); 
        digitalWrite(2, LOW);
        int Speed = Serial2.parseInt();
        setSpeed(Speed);
      }
    }
    
    
    
    
    
  }
}



