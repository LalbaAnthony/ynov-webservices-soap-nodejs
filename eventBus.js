
class EventBus {
    constructor() {
        this.listeners = {};
    }

    subscribe(eventName, handler) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];

        }
        this.listeners[eventName].push(handler);
    }

    publish(eventName, payload) {
        console.log(`📢 EVENT: ${eventName}`, payload);
        (this.listeners[eventName] || []).forEach(handler => handler(payload));
    }
}
module.exports = new EventBus();