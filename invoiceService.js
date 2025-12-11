
const eventBus = require("./eventBus");
class InvoiceService {
    constructor() {
        eventBus.subscribe("SHIPPING_READY", this.generateInvoice.bind(this));

    }
    generateInvoice({ orderId, tracking }) {
        console.log(`📄 Generating invoice for order #${orderId} (tracking: ${tracking})`);
    }
}
module.exports = new InvoiceService();