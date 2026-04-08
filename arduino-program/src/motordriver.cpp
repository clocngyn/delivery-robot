#include "robot.h"
#include "motordriver.h"

// set the pins to output
void initMotorDriver() {
    pinMode(motorA_in1, OUTPUT);
    pinMode(motorA_in2, OUTPUT);
    pinMode(motorA_pwm, OUTPUT);
    
    pinMode(motorB_in1, OUTPUT);
    pinMode(motorB_in2, OUTPUT);
    pinMode(motorB_pwm, OUTPUT);
    
    //pinMode(stbyPin, OUTPUT);
    //digitalWrite(stbyPin, HIGH); //keeps the motor active
}

// drive function mainly used to receive and interpret the websocket signals
void drive(String direction) {
    testString = direction;
    if (direction == "STOP") { // redundant guard statement
        stop();
        return;
    }

    analogWrite(motorA_pwm, driveSpeed);
    analogWrite(motorB_pwm, driveSpeed);
    if (direction == "FORWARD") {
        digitalWrite(motorA_in1, HIGH);
        digitalWrite(motorA_in2, LOW);
        digitalWrite(motorB_in1, HIGH);
        digitalWrite(motorB_in2, LOW);
    } else if (direction == "BACKWARD") {
        digitalWrite(motorA_in1, LOW);
        digitalWrite(motorA_in2, HIGH);
        digitalWrite(motorB_in1, LOW);
        digitalWrite(motorB_in2, HIGH);
    } else if (direction == "LEFT") {
        digitalWrite(motorA_in1, HIGH);
        digitalWrite(motorA_in2, LOW);
        digitalWrite(motorB_in1, LOW);
        digitalWrite(motorB_in2, HIGH);
    } else if (direction == "RIGHT") {
        digitalWrite(motorA_in1, LOW);
        digitalWrite(motorA_in2, HIGH);
        digitalWrite(motorB_in1, HIGH);
        digitalWrite(motorB_in2, LOW);
    }
}

// move is used to actually set the rotation of the motors
void move(int leftSpeed, int rightSpeed) {

}

void stop() {
    //testString = "STOP";
    analogWrite(motorA_pwm, 0);
    analogWrite(motorB_pwm, 0);
    digitalWrite(motorA_in1, LOW);
    digitalWrite(motorA_in2, LOW);
    digitalWrite(motorB_in1, LOW);
    digitalWrite(motorB_in2, LOW);
}


