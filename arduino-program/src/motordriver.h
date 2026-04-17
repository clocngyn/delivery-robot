// 
#ifndef MOTOR_H
#define MOTOR_H

#include <Arduino.h>

//  define what pins were using for what 
//  motordriver 1 controls both left wheels
const int motor1A_in1 = 18;
const int motor1A_in2 = 19;

const int motor1B_in1 = 21;
const int motor1B_in2 = 22;

// motor 2 controls both right wheels
const int motor2A_in1 = 26;
const int motor2A_in2 = 27;

const int motor2B_in1 = 14;
const int motor2B_in2 = 13;

// standby pin
const int stbyPin    = 33; 

#define CMD_FORWARD     'F'
#define CMD_BACKWARD    'B'
#define CMD_LEFT        'L'
#define CMD_RIGHT       'R'
#define CMD_STOP        'S'

// prototypes
void initMotorDriver();
void drive(char direction);                  // receives from websocket
void setSpeed(int speedValue);
void stop();                    

#endif