// this file is dedicated to helper functions that control the motordrivers

#include "robot.h"
#include "motordriver.h"

// set the pins to output
void initMotorDriver() {
    pinMode(motor1A_in1, OUTPUT);
    pinMode(motor1A_in2, OUTPUT);
    
    pinMode(motor1B_in1, OUTPUT);
    pinMode(motor1B_in2, OUTPUT);

    pinMode(motor2A_in1, OUTPUT);
    pinMode(motor2A_in2, OUTPUT);
    
    pinMode(motor2B_in1, OUTPUT);
    pinMode(motor2B_in2, OUTPUT);
    
    //pinMode(stbyPin, OUTPUT);
    //digitalWrite(stbyPin, HIGH); //keeps the motor active
}

// drive function mainly used to receive and interpret the websocket signals
void drive(char direction) {
    Serial.println(direction);
    if (direction == 'S') { // guard 
        stop();
        return;
    }

    // sets pins based on the received command
    if (direction == CMD_FORWARD) {
        analogWrite(motor1A_in1, driveSpeed);
        digitalWrite(motor1A_in2, LOW);
        analogWrite(motor1B_in1, driveSpeed);
        digitalWrite(motor1B_in2, LOW);
        analogWrite(motor2A_in1, driveSpeed);
        digitalWrite(motor2A_in2, LOW);
        analogWrite(motor2B_in1, driveSpeed);
        digitalWrite(motor2B_in2, LOW);
    } else if (direction == CMD_BACKWARD) {
        digitalWrite(motor1A_in1, LOW);
        analogWrite(motor1A_in2, driveSpeed);
        digitalWrite(motor1B_in1, LOW);
        analogWrite(motor1B_in2, driveSpeed);
        digitalWrite(motor2A_in1, LOW);
        analogWrite(motor2A_in2, driveSpeed);
        digitalWrite(motor2B_in1, LOW);
        analogWrite(motor2B_in2, driveSpeed);
    } else if (direction == CMD_LEFT) {         // turns are always constant speed
        analogWrite(motor1A_in1, 255);
        digitalWrite(motor1A_in2, LOW);
        digitalWrite(motor1B_in1, LOW);
        analogWrite(motor1B_in2, 255);
        analogWrite(motor2A_in1, 255);
        digitalWrite(motor2A_in2, LOW);
        digitalWrite(motor2B_in1, LOW);
        analogWrite(motor2B_in2, 255);
    } else if (direction == CMD_RIGHT) {
        digitalWrite(motor1A_in1, LOW);
        analogWrite(motor1A_in2, 255);
        analogWrite(motor1B_in1, 255);
        digitalWrite(motor1B_in2, LOW);
        digitalWrite(motor2A_in1, LOW);
        analogWrite(motor2A_in2, 255);
        analogWrite(motor2B_in1, 255);
        digitalWrite(motor2B_in2, LOW);
    }
}

// stop function
void stop() {
    //testString = "STOP";
    digitalWrite(motor1A_in1, LOW);
    digitalWrite(motor1A_in2, LOW);
    digitalWrite(motor1B_in1, LOW);
    digitalWrite(motor1B_in2, LOW);
    digitalWrite(motor2A_in1, LOW);
    digitalWrite(motor2A_in2, LOW);
    digitalWrite(motor2B_in1, LOW);
    digitalWrite(motor2B_in2, LOW);
}

// changes the power output of the motors
void setSpeed(int speedValue) {
    driveSpeed = constrain(speedValue, 0, 255); // clamp 
}


