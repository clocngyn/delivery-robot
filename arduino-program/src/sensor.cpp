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
  lastSense.front = hc.dist(0); delay(10); // delay to lessen interference
  lastSense.back  = hc.dist(1); delay(10);
  lastSense.left  = hc.dist(2); delay(10);
  lastSense.right = hc.dist(3);

  /*
  Serial.print("front: ");
  Serial.print(lastSense.front);
  Serial.print("    right: ");
  Serial.print(lastSense.right);
  Serial.print("    backwards: ");
  Serial.print(lastSense.back);
  Serial.print("    left: ");
  Serial.println(lastSense.left);*/

  if (lastSense.front < cautionDistance && lastSense.front > 0.00) {
    canDrive = false;
  } else {
    canDrive = true;
  }

  if (lastSense.right < 30 || lastSense.left < 30) {
    driveSpeed = 125;
  } else {
    driveSpeed = 255;
  }
}

