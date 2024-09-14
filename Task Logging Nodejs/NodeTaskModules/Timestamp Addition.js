function timestampAddition(msg) {
    const now = new Date();
    const timestamp = now.toISOString().replace('T', ' ').substring(0, 19); // Format YYYY-MM-DD HH:MM:SS
    msg.payload.timestamp = timestamp;
    return msg;
}

module.exports = timestampAddition;
