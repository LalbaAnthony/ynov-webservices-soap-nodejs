
const CartService = require("./cartService");
require("./paymentService");
require("./shippingService");
require("./invoiceService");

// Simule une commande
CartService.checkout({
    orderId: 999,
    items: [
        { name: "T-Shirt", price: 29 },
        { name: "Shoes", price: 100 }
    ]
});