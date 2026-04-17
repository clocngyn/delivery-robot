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
    //analogWrite(stbyPin, HIGH); //keeps the motor active
}

// drive function mainly used to receive and interpret the websocket signals
void drive(char direction) {
    Serial.print("Drive function called: ");
    Serial.println(direction);
    Serial.print("Speed: ");
    Serial.println(driveSpeed);
    if (direction == 'S') { // guard 
        stop();
        return;
    }

    // sets pins based on the received command
    if (direction == CMD_FORWARD) {
        //Serial.println("inside block");
        analogWrite(motor1A_in1, driveSpeed);
        analogWrite(motor1A_in2, 0);
        analogWrite(motor1B_in1, driveSpeed);
        analogWrite(motor1B_in2, 0);
        
        analogWrite(motor2A_in1, 0);
        analogWrite(motor2A_in2, driveSpeed);
        analogWrite(motor2B_in1, 0);
        analogWrite(motor2B_in2, driveSpeed);
    } else if (direction == CMD_BACKWARD) {
        analogWrite(motor1A_in1, 0);
        analogWrite(motor1A_in2, driveSpeed);
        analogWrite(motor1B_in1, 0);
        analogWrite(motor1B_in2, driveSpeed);

        analogWrite(motor2A_in1, driveSpeed);
        analogWrite(motor2A_in2, 0);
        analogWrite(motor2B_in1, driveSpeed);
        analogWrite(motor2B_in2, 0);
        
    } else if (direction == CMD_LEFT) {         // turns are always constant speed
        analogWrite(motor1A_in1, 0);
        analogWrite(motor1A_in2, 255);
        analogWrite(motor1B_in1, 0);
        analogWrite(motor1B_in2, 255);

        analogWrite(motor2A_in1, 0);
        analogWrite(motor2A_in2, 255);
        analogWrite(motor2B_in1, 0);
        analogWrite(motor2B_in2, 255);
    } else if (direction == CMD_RIGHT) {
        analogWrite(motor1A_in1, 255);
        analogWrite(motor1A_in2, 0);
        analogWrite(motor1B_in1, 255);
        analogWrite(motor1B_in2, 0);

        analogWrite(motor2A_in1, 255);
        analogWrite(motor2A_in2, 0);
        analogWrite(motor2B_in1, 255);
        analogWrite(motor2B_in2, 0);
        
    }
}

// stop function
void stop() {
    //testString = "STOP";
    analogWrite(motor1A_in1, 0);
    analogWrite(motor1A_in2, 0);
    analogWrite(motor1B_in1, 0);
    analogWrite(motor1B_in2, 0);
    analogWrite(motor2A_in1, 0);
    analogWrite(motor2A_in2, 0);
    analogWrite(motor2B_in1, 0);
    analogWrite(motor2B_in2, 0);
}

// changes the power output of the motors
void setSpeed(int speedValue) {
    driveSpeed = constrain(speedValue, 0, 255); // clamp 
}


