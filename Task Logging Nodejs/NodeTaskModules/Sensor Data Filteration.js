function filterSensorData(value, threshold) {
    if (value < threshold) {
        return null;
    }
    return value;
}

module.exports = filterSensorData;
