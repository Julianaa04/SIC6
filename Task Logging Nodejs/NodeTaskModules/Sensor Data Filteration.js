// Sensor Data Filteration.js

function filterSensorData(value, threshold) {
    if (value < threshold) {
        return null;
    }
    return value;
}

module.exports = filterSensorData;
