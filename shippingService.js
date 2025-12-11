
const eventBus = require("./eventBus");
class ShippingService {
    constructor() {
        eventBus.subscribe("PAYMENT_SUCCESS", this.prepareShipping.bind(this));

    }
    prepareShipping({ orderId }) {
        console.log(`📦 Preparing shipping for order #${orderId}`);
        eventBus.publish("SHIPPING_READY", {
            orderId,
            tracking: "TRACK12345"

        });
    }
}
module.exports = new ShippingService();
