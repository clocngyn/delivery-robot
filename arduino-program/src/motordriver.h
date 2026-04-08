// 
#ifndef MOTOR_H
#define MOTOR_H

#include <Arduino.h>

//  define what pins were using for what 
//  motor A controls both right wheels
const int motorA_in1 = 18;
const int motorA_in2 = 19;
const int motorA_pwm = 23;

// motor B controls both left wheels
const int motorB_in1 = 14;
const int motorB_in2 = 12;
const int motorB_pwm = 13;

const int stbyPin    = 33; 

// prototypes
void initMotorDriver();
void drive(String direction) ;                  // receives from websocket
void move(int leftSpeed, int rightSpeed);       //helper function
void stop();                    

#endif