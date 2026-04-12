//HCSR04 hc(5, new int[4]{18, 19, 21, 22}, 4); // temp values
#ifndef SENSOR_H
#define SENSOR_H

const int triggerPin        = 5;
const int frontEcho         = 18;
const int rightEcho         = 19;
const int leftEcho          = 21;
const int backEcho          = 22;

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