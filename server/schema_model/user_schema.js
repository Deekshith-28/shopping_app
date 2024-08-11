const mongoose = require("mongoose");
const { Schema } = mongoose

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isVerify: { type: Number},
    
})

exports.user = mongoose.model("User", userSchema)