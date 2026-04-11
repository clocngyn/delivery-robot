// 
#ifndef MOTOR_H
#define MOTOR_H

#include <Arduino.h>

//  define what pins were using for what 
//  motordriver 1 controls both right wheels
const int motor1A_in1 = 18;
const int motor1A_in2 = 19;
const int motor1A_pwm = 23;

const int motor1B_in1 = 21;
const int motor1B_in2 = 22;
const int motor1B_pwm = 25;

// motor B controls both left wheels
const int motor2A_in1 = 26;
const int motor2A_in2 = 27;
const int motor2A_pwm = 33;

const int motor2B_in1 = 14;
const int motor2B_in2 = 13;
const int motor2B_pwm = 4;

// standby pin
const int stbyPin    = 33; 

// prototypes
void initMotorDriver();
void drive(char direction);                  // receives from websocket
void setSpeed(int speedValue);
void stop();                    

#endif