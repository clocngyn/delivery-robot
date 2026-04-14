//#include "robot.h"
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
void drive(char direction) {
    Serial.println(direction);
    if (direction == 'S') { // redundant guard statement
        stop();
        return;
    }

    if (direction == CMD_FORWARD) {
        digitalWrite(motor1A_in1, HIGH);
        digitalWrite(motor1A_in2, LOW);
        digitalWrite(motor1B_in1, HIGH);
        digitalWrite(motor1B_in2, LOW);
        digitalWrite(motor2A_in1, HIGH);
        digitalWrite(motor2A_in2, LOW);
        digitalWrite(motor2B_in1, HIGH);
        digitalWrite(motor2B_in2, LOW);
    } else if (direction == CMD_BACKWARD) {
        digitalWrite(motor1A_in1, LOW);
        digitalWrite(motor1A_in2, HIGH);
        digitalWrite(motor1B_in1, LOW);
        digitalWrite(motor1B_in2, HIGH);
        digitalWrite(motor2A_in1, LOW);
        digitalWrite(motor2A_in2, HIGH);
        digitalWrite(motor2B_in1, LOW);
        digitalWrite(motor2B_in2, HIGH);
    } else if (direction == CMD_LEFT) {
        digitalWrite(motor1A_in1, HIGH);
        digitalWrite(motor1A_in2, LOW);
        digitalWrite(motor1B_in1, LOW);
        digitalWrite(motor1B_in2, HIGH);
        digitalWrite(motor2A_in1, HIGH);
        digitalWrite(motor2A_in2, LOW);
        digitalWrite(motor2B_in1, LOW);
        digitalWrite(motor2B_in2, HIGH);
    } else if (direction == CMD_RIGHT) {
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

void setSpeed(int speedValue) {
    speedValue = constrain(speedValue, 0, 255); // clamp 
    analogWrite(motor1A_pwm, speedValue);
    analogWrite(motor1B_pwm, speedValue);
    analogWrite(motor2A_pwm, speedValue);
    analogWrite(motor2B_pwm, speedValue);
}


