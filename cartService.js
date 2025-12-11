
const eventBus = require("./eventBus");
class CartService {
    checkout(cart) {
        const total = cart.items.reduce((sum, item) => sum + item.price, 0);
        console.log("🛒 Cart total =", total);
        
        // Publie un événement “ready for payment”
        eventBus.publish("PAYMENT_REQUEST", {
            orderId: cart.orderId,
            total: total
        });
    }
}

module.exports = new CartService(); 