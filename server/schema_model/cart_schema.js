const mongoose = require("mongoose");
const { Schema } = mongoose

const cartSchema = new Schema({
    userID: { type: String, required: true },
    items:[Schema.Types.Mixed]
})

exports.cart = mongoose.model("Cart", cartSchema)