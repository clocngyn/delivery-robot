#include <Arduino.h>
#include <HCSR04.h>
#include "robot.h"
#include "sensor.h"

// hcsr04 object declaration
// (trigger pin, array of echo pins, number of sensors)
HCSR04 hc(triggerPin, new int[4]{frontEcho, rightEcho, backEcho, leftEcho}, 4); // temp values

const int cautionDistance = 30; // cm

SensorTable lastSense = {0, 0, 0, 0};


void sense() { 
  // updates our latest check distances
  lastSense.front = hc.dist(0);
  lastSense.back  = hc.dist(1);
  lastSense.left  = hc.dist(2);
  lastSense.right = hc.dist(3);


  if (lastSense.front < cautionDistance) {
    canDrive = false;
  }
}

