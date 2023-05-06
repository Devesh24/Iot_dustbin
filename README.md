PROBLEM STATEMENT: Build an IOT-based dustbin that can send the status of the dustbin to the webpage.

TEAM NAME: HomoDeus 

TEAM MEMBERS: Devesh Raghuvanshi, Pradhyuman Ahuja, Roshan Kumar 

IDEA: We have created a smart dustbin using ESP 8266 Node MCU. We have tried to link the dustbin with two types of sensors: Ultrasonic sensor for level monitoring and Moisture Sensor for moisture monitoring. We have also used arduino with Ultrasonic sensor and servo motor for automatic opening the lid of the dustbin. The data from all of these sensors is sent to a WebSocket Server through which it is then sent to the Database(Railway). From the database, the data is fetched to the frontend React application and is shown in an animated way. Along with the sensor data, we have also build the site keeping in mind the current technical scenario where a worker can easily login and register into the site and can access all the dustbins in his region. Also we have attached notification system for notifying the worker when the dustbin is full. TECH STACK: ReactJS, Javascript, NodeJs, ExpressJS, Django, Python, RailwayDb, ESP8266, Arduino UNO, Ultrasonic sensor, Moisture sensor, Servo Motor, Embedded C 

DEPLOYMENT: https://waste-watchers1.netlify.app/

VIDEO: https://youtu.be/2CuXqpJu-ko
