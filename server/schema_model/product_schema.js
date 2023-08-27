const mongoose = require("mongoose");
const { Schema } = mongoose

const productSchema = new Schema({
    name: { type: String, required: true },
    details: { type: String, required: true },
    price: { type: Number, required: true },
    photo: { type: String, required: true }
})

exports.product = mongoose.model("Products", productSchema)