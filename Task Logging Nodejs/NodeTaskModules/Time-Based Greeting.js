// Time-Based Greeting.js

function timeBasedGreeting() {
    const now = new Date();
    const hours = now.getHours();

    let greeting;
    if (hours < 12) {
        greeting = "Good morning";
    } else if (hours < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    return { payload: { greeting } };
}

module.exports = timeBasedGreeting;
