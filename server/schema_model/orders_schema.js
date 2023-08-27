const mongoose = require("mongoose");
const { Schema } = mongoose

const ordersSchema = new Schema({
    userID: { type: String, required: true },
    customername: { type: String, required: true },
    mobile: { type: Number, required: true },
    address: { type: String, required: true },
    items: [Schema.Types.Mixed] ,
    amount: { type: Number, required: true }
})

exports.orders = mongoose.model("Orders", ordersSchema)