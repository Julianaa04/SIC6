const messageProcessing = require('./Message_Processing');
const stringManipulation = require('./String Manipulation');
const filterSensorData = require('./Sensor Data Filteration');
const timeBasedGreeting = require('./Time-Based Greeting');
const combineSensorData = require('./combineSensorData');
const timestampAddition = require('./Timestamp Addition');
const dynamicPropertyAccess = require('./dynamicPropertyAccess');


// Test Task 1: Message Processing
const message = { payload: { temperature: 35, humidity: 60 } };
console.log("Message Processing:", messageProcessing(message));

// Test Task 2: String Manipulation
const str = "hello world";
console.log("String Manipulation:", stringManipulation({ payload: { text: str } }));

// Test Task 3: Filter Sensor Data
const sensorData = { payload: { value: 25, threshold: 30 } };
console.log("Filter Sensor Data:", filterSensorData(sensorData.payload.value, sensorData.payload.threshold));

// Test Task 4: Time-Based Greeting
console.log("Time-Based Greeting:", timeBasedGreeting());

// Test Task 5: Combine Sensor Data
const sensor1 = { payload: { temperature: 22 } };
const sensor2 = { payload: { humidity: 55 } };
console.log("Combine Sensor Data:", combineSensorData(sensor1.payload.temperature, sensor2.payload.humidity));

// Test Task 6: Timestamp Addition
const payload = { payload: { data: "sensor reading" } };
console.log("Timestamp Addition:", timestampAddition(payload));

// Test Task 7: Dynamic Property Access
const msg = { payload: { temperature: 25, humidity: 60 }, propertyName: "temperature" };
console.log("Dynamic Property Access:", dynamicPropertyAccess(msg.payload, msg.propertyName));
