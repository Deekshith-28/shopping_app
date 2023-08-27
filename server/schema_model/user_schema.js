const mongoose = require("mongoose");
const { Schema } = mongoose

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
    
})

exports.user = mongoose.model("User", userSchema)