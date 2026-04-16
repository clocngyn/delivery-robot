#include "robot.h"
#include "sensor.h"
#include "motordriver.h"

#include <ESPmDNS.h> // used to name the ip
#include <TinyGPS++.h>

#define MotorSerial Serial1
#define GPSSerial   Serial2

// define variables from robot.h
int     driveSpeed          = 255;
char    robotDriveState     = 'S';
String  testString          = "";
bool    canDrive            = true;

TinyGPSPlus GPS;

// loop logic

unsigned long lastGPSDebugTime = 0;

// used in sensor algorithm
unsigned long lastSensorTime = 0;
const int sensorInterval = 60; // 60ms between thoughts

// helper to send change and send all drive state references
void changeDriveState(char robotDriveState, char &lastDriveState) {
  //Serial.println(robotDriveState);        // just for confirmation on esp1 serial monitor
  //MotorSerial.print(robotDriveState);         // printing to serial 2 sends the actual char to esp2
  drive(robotDriveState);
  lastDriveState = robotDriveState;       //update state
}

void sendTelemetry();

void setup() {
  pinMode(2, OUTPUT);
  digitalWrite(2, HIGH);
  Serial.begin(115200);                           // esp32 can read at 115200 bps
  // (rx, tx)
  //MotorSerial.begin(9600, SERIAL_8N1, 25, 26);  // opens the 2nd serial port to speak to 2nd esp
  GPSSerial.begin(9600, SERIAL_8N1, 16, 17);      // gps needs another serial

  // starts wifi
  WiFi.begin("iPhone", "tset2sdkt5q4");       // (wifi name, password)
  while (WiFi.status() != WL_CONNECTED) {     // yield until wifi connected
    delay(500);
    Serial.print("."); 
  }

  // renames the url
  if (MDNS.begin("deliveryrobot")) {
    Serial.println("mDNS responder started");
  } else {
    Serial.println("Error setting up MDNS responder!");
  }
  // print when connected
  String connectMessage = "\nConnected! IP address: " + WiFi.localIP().toString();
  Serial.println(connectMessage);

  // begin littleFS, littleFS sets up data structures to the flash memory 
  // allowing for data management, this gives us our web interface html file
  if(!LittleFS.begin(true)) {
    Serial.println("LittleFS Mount Failed");
  } else {
    Serial.println("LittleFS Mount Success");
  }

  // init sets pins
  webSocketInit();
  initMotorDriver();
  
  Serial.println("Setup done");
}

// runs on loop listening for drive commands and sending any data it picks up to websocket
void loop() {
  webSocket.cleanupClients();     // cleans up disconnected clients

  unsigned long currentTime = millis();
  static int lastDriveSpeed = driveSpeed;
  // asynchronously runs our logic
  if (currentTime - lastSensorTime >= sensorInterval) {
    sense();

    static char lastDriveState = 'S'; // records the last state
    // changes drive direction
    if (!canDrive && robotDriveState == 'F') {  // if cant drive and going forward, stop
      if (lastDriveState != 'S') { // force stop if not stopped
        changeDriveState('S', lastDriveState);
      }
    } else if (robotDriveState != lastDriveState) {     // if can drive and in a new state
      changeDriveState(robotDriveState, lastDriveState);
    }

    // if speed has changed send speed change to esp2
    if (driveSpeed != lastDriveSpeed) {
        setSpeed(driveSpeed);
        //MotorSerial.print('V');
        //MotorSerial.println(driveSpeed);
        lastDriveSpeed = driveSpeed;
    }
    lastSensorTime = currentTime; // Reset the timer
  }  

  // debug print, makes sure gps serial was getting signal in the first place
  /*
  while (GPSSerial.available() > 0) {
    char c = GPSSerial.read();
    Serial.print(c); // This prints raw NMEA sentences
    GPS.encode(c);
  }*/

  // sends info to websocket, otherwise checks how many satellites
  if (GPS.location.isUpdated()) {
    sendTelemetry();
  } else if (currentTime - lastGPSDebugTime >= 5000) {  // timeout function, send what we have even
    sendTelemetry();                                    // if theres no gps
    Serial.print("Satellites in view: ");
    Serial.println(GPS.satellites.value()); 
    lastGPSDebugTime = currentTime;
  }
  
  //Serial.println(testString);
  //delay(20); 
}


// sends data to our client
void sendTelemetry() {
  JsonDocument doc;
  
  // gps keys
  doc["lat"] = GPS.location.lat();
  doc["lng"] = GPS.location.lng();
  doc["status"] = "Active";

  // other metrics
  doc["wifi"] = WiFi.RSSI();            // wifi 
  doc["safe"] = canDrive;               // if the robot can drive
  doc["spd"]  = driveSpeed;             // current speed 
  doc["sats"] = GPS.satellites.value(); // satellites


  String jsonOutput;
  serializeJson(doc, jsonOutput); // turns doc into json for sending to websocket
  
  // send to websocket, ESPAsyncWebServer function, triggers onMessage in websocket
  webSocket.textAll(jsonOutput); 
}


