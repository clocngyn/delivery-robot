//HCSR04 hc(5, new int[4]{18, 19, 21, 22}, 4); // temp values
#ifndef SENSOR_H
#define SENSOR_H

const int triggerPin        = 32;
const int frontEcho         = 36;
const int rightEcho         = 39;
const int leftEcho          = 34;
const int backEcho          = 35;

// a way to transport a sweep of our sensors
struct SensorTable {
    float front;
    float back;
    float left;
    float right;
};

extern SensorTable lastSense;

void sense();

#endif