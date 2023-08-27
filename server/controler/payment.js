const express = require("express")
const router = express.Router()
const Razorpay = require('razorpay');
const crypto = require('crypto');
require('dotenv').config()
let keyId = process.env.key_id
let keySecrete = process.env.key_secrete

router.post("/order", (req, res) => {
    let instance = new Razorpay({ key_id: keyId, key_secret: keySecrete })

    let options = {
        amount: req.body.amount * 100,
        currency: "INR",
    };
    instance.orders.create(options, function (err, order) {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).json(order)
        }

    });
})

// Verification 
router.post("/verify", (req, res) => {

    let body = req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;

    const generated_signature = crypto.createHmac('sha256', keySecrete)
        .update(body.toString())
        .digest('hex');


    if (generated_signature === req.body.response.razorpay_signature) {
        res.status(200).json({ "message": "payment Varified sucessfull" })
    } else {
        res.status(401).json({ "message": "payment Varified failed " })
    }

})

exports.router = router