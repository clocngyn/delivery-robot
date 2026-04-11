#include "robot.h"
#include "motordriver.h"

// set the pins to output
void initMotorDriver() {
    pinMode(motor1A_in1, OUTPUT);
    pinMode(motor1A_in2, OUTPUT);
    pinMode(motor1A_pwm, OUTPUT);
    
    pinMode(motor1B_in1, OUTPUT);
    pinMode(motor1B_in2, OUTPUT);
    pinMode(motor1B_pwm, OUTPUT);

    pinMode(motor2A_in1, OUTPUT);
    pinMode(motor2A_in2, OUTPUT);
    pinMode(motor2A_pwm, OUTPUT);
    
    pinMode(motor2B_in1, OUTPUT);
    pinMode(motor2B_in2, OUTPUT);
    pinMode(motor2B_pwm, OUTPUT);
    
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

    analogWrite(motor1A_pwm, driveSpeed);
    analogWrite(motor1B_pwm, driveSpeed);
    analogWrite(motor2A_pwm, driveSpeed);
    analogWrite(motor2B_pwm, driveSpeed);
    if (direction == "FORWARD") {
        digitalWrite(motor1A_in1, HIGH);
        digitalWrite(motor1A_in2, LOW);
        digitalWrite(motor1B_in1, HIGH);
        digitalWrite(motor1B_in2, LOW);
        digitalWrite(motor2A_in1, HIGH);
        digitalWrite(motor2A_in2, LOW);
        digitalWrite(motor2B_in1, HIGH);
        digitalWrite(motor2B_in2, LOW);
    } else if (direction == "BACKWARD") {
        digitalWrite(motor1A_in1, LOW);
        digitalWrite(motor1A_in2, HIGH);
        digitalWrite(motor1B_in1, LOW);
        digitalWrite(motor1B_in2, HIGH);
        digitalWrite(motor2A_in1, LOW);
        digitalWrite(motor2A_in2, HIGH);
        digitalWrite(motor2B_in1, LOW);
        digitalWrite(motor2B_in2, HIGH);
    } else if (direction == "LEFT") {
        digitalWrite(motor1A_in1, HIGH);
        digitalWrite(motor1A_in2, LOW);
        digitalWrite(motor1B_in1, LOW);
        digitalWrite(motor1B_in2, HIGH);
        digitalWrite(motor2A_in1, HIGH);
        digitalWrite(motor2A_in2, LOW);
        digitalWrite(motor2B_in1, LOW);
        digitalWrite(motor2B_in2, HIGH);
    } else if (direction == "RIGHT") {
        digitalWrite(motor1A_in1, LOW);
        digitalWrite(motor1A_in2, HIGH);
        digitalWrite(motor1B_in1, HIGH);
        digitalWrite(motor1B_in2, LOW);
        digitalWrite(motor2A_in1, LOW);
        digitalWrite(motor2A_in2, HIGH);
        digitalWrite(motor2B_in1, HIGH);
        digitalWrite(motor2B_in2, LOW);
    }
}

// move is used to actually set the rotation of the motors
void move(int leftSpeed, int rightSpeed) {
    
}

void stop() {
    //testString = "STOP";
    analogWrite(motor1A_pwm, 0);
    analogWrite(motor1B_pwm, 0);
    analogWrite(motor2A_pwm, 0);
    analogWrite(motor2B_pwm, 0);
    digitalWrite(motor1A_in1, LOW);
    digitalWrite(motor1A_in2, LOW);
    digitalWrite(motor1B_in1, LOW);
    digitalWrite(motor1B_in2, LOW);
    digitalWrite(motor2A_in1, LOW);
    digitalWrite(motor2A_in2, LOW);
    digitalWrite(motor2B_in1, LOW);
    digitalWrite(motor2B_in2, LOW);
}


