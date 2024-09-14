function messageProcessing(msg) {
    if (!msg || !msg.payload || typeof msg.payload.temperature === 'undefined') {
        console.error("Invalid message format:", msg);
        return null; // Handle error or return a default value
    }
    const temp = msg.payload.temperature;
    msg.payload.status = temp > 30 ? "High" : "Normal";
    return msg;
}

module.exports = messageProcessing;
