// combineSensorData.js

function combineSensorData(temp, humidity) {
    return { payload: { message: `Temperature: ${temp}°C, Humidity: ${humidity}%` } };
}

module.exports = combineSensorData;
