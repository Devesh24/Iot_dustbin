#include <Servo.h>
Servo myservo;  
#define trigo 7
#define echo 6
void setup() {
  // put your setup code here, to run once:
myservo.attach(5);  // attaches the servo on pin 9 to the servo object
myservo.write(0);  
 pinMode(trigo,OUTPUT);
 pinMode(echo,INPUT);
 Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
 long distance , duration;
  digitalWrite(trigo,LOW);
  delayMicroseconds(2);
  digitalWrite(trigo,HIGH);
  delayMicroseconds(10);
  digitalWrite(trigo,LOW);
  duration = pulseIn(echo,HIGH);
  distance = (duration/2) / 29.1;
  if (distance<10)
  {
    myservo.write(180);
  }
  else
  {
myservo.write(0); 
  }
Serial.print(distance);
Serial.println("cm");
delay(1000);


}
