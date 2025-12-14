const eventBus = require("./eventBus");
class PaymentService {
    constructor() {
        // écoute les demandes de paiement
        eventBus.subscribe("PAYMENT_REQUEST", this.handlePayment.bind(this));
    }

    handlePayment({ orderId, total }) {
        console.log(`💳 Processing payment for #${orderId}: ${total}€`);
        // Simulation succès
        eventBus.publish("PAYMENT_SUCCESS", {
            orderId,
            paid: true
        });
    }
}

module.exports = new PaymentService();
