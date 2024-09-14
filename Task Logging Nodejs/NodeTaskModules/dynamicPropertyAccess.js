function dynamicPropertyAccess(payload, propertyName) {
    if (payload && propertyName in payload) {
        return payload[propertyName];
    }
    return null;
}

module.exports = dynamicPropertyAccess;
