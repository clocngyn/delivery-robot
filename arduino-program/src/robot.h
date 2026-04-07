#ifndef robot
#define robot

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

// Function prototypes
void webSocketInit();
void onWebSocketEvent(AsyncWebSocket *server, AsyncWebSocketClient *client, AwsEventType type,
                      void *arg, uint8_t *data, size_t len);

#endif