#include <ESP8266WiFi.h>
#include <WebSocketClient.h>

const char* ssid     = "Devesh";
const char* password = "devesh@2403";
char path[] = "/echo";
char host[] = "192.168.27.191:1000";
// char host[] = "169.254.242.17:3000";

const int trigPin = 13;
const int echoPin = 15;
long duration;
float distanceCm;
int current_p = 0;
const int MAX_H = 22;
float change_p;
float previous_p = 0;
int moisture_percentage_c=0;
float moisture_percentage_p=0;
float moisture_percentage_ch=0;



 WebSocketClient webSocketClient;
 WiFiClient client;

void setup() {
  Serial.begin(115200);
  delay(10);
  // We start by connecting to a WiFi network
  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
  
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");  
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());

  delay(5000);
  
  // Connect to the websocket server
  if (client.connect("192.168.27.191",1000)) {
  // if (client.connect("192.168.137.1",1000)) {
    Serial.println("Connected");
  } else {
    Serial.println("Connection failed.");
    while(1) {
      // Hang on failure
    }
  }

  // Handshake with the server
  webSocketClient.path = path;
  webSocketClient.host = host;
  if (webSocketClient.handshake(client)) {
    Serial.println("Handshake successful");
  } else {
    Serial.println("Handshake failed.");
    
     while(1) {
      // Hang on failure
    }
  }

pinMode(trigPin, OUTPUT); // Sets the trigPin as an Output
pinMode(echoPin, INPUT); // Sets the echoPin as an Input   
}


void loop() { 
 if (client.connected()) {
   digitalWrite(trigPin, LOW);
   delayMicroseconds(2);
  // Sets the trigPin on HIGH state for 10 micro seconds
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration = pulseIn(echoPin, HIGH);
  
  // Calculate the distance
  distanceCm = (duration/2) / 29.1;
  moisture_percentage_c = ( 100.00 - ( (analogRead(A0)/1023.00) * 100.00 ) );
  if(moisture_percentage_c < 0)
  {
    moisture_percentage_c = - moisture_percentage_c;
  }
  if(distanceCm < 0)
  {
    distanceCm = - distanceCm;
  } 

Serial.print("Distance (cm): ");
Serial.println(distanceCm);

if (distanceCm > 1500)
{
  String dustbin="100;"+String(moisture_percentage_c);
}
else if (distanceCm <= MAX_H)
 { 
   current_p=distanceCm*5;
   change_p = current_p - previous_p;
   if (change_p < 0)
   {change_p = -change_p;}
    moisture_percentage_ch =  moisture_percentage_c -  moisture_percentage_p;
    if ( moisture_percentage_ch < 0)
    { moisture_percentage_ch =  moisture_percentage_ch;}
  if (change_p >= 10 ||  moisture_percentage_ch > 5)
   {
  // Prints the distance in the Serial Monitor
  // Serial.print("Distance (cm): ");
  // Serial.println(current_p);
  
    String dustbin=String(100-current_p)+";"+String(moisture_percentage_c);
    
  
    webSocketClient.sendData(dustbin);
    Serial.println(dustbin);
  }
   previous_p = current_p;
 moisture_percentage_p =  moisture_percentage_c;
}


}  
 
  
   else {
    Serial.println("Client disconnected.");

    delay(500);
    while(1){
      
    }
  }
   delay(1000);
  
}

