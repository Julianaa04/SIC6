function stringManipulation(msg) {
    if (!msg || !msg.payload || typeof msg.payload.text !== 'string') {
        console.error("Invalid input:", msg);
        return null;
    }
    let str = msg.payload.text;
    if (str.length > 10) {
        str = str.toUpperCase() + " (truncated)";
    } else {
        str = str.toUpperCase();
    }
    return str;
}

module.exports = stringManipulation;
