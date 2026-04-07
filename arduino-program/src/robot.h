// this header file package acts as a compact way to import all required dependencies at once
// variables and functions declared in this file can also be accessed across different files 
// as long as this file is included
#ifndef robot
#define robot

// dependencies
#include <Arduino.h>
#include <HCSR04.h>                   // ultrasonic sensor
#include <ESPAsyncWebServer.h>
#include <AsyncTCP.h>
#include <LittleFS.h>                 // fail safe and data management system
#include <ArduinoJson.h>              
#include <WiFi.h>

// extern makes these global, can be accessed anywhere this header is included
extern AsyncWebServer server;
extern AsyncWebSocket webSocket;

extern String robotDriveState;  // ex. "FORWARD", "STOP", these will be modified by websocket.cpp
                                // and main will act based on the current state

// function prototypes
void webSocketInit();
void onWebSocketEvent(AsyncWebSocket *server, AsyncWebSocketClient *client, AwsEventType type,
                      void *arg, uint8_t *data, size_t len);

#endif