const express = require("express")
const model = require("../schema_model/orders_schema")
const Orders = model.orders
const router = express.Router()

router.post("/", async (req, res) => {

    let product = new Orders(req.body)
    try {
        let doc = await product.save()
        
        res.status(201).json({ "message": "Orderd Sucessfully" });
    } catch (err) {
        res.status(400).json({ "message": "Orderd not done" });
    }
})

router.get("/", async (req, res) => {
   
    try {
        let doc = await Orders.find({})
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }
})

router.get("/:id", async (req, res) => {
    try {
        let doc = await Orders.findOne({ _id: req.params.id })
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        let doc = await Orders.findByIdAndDelete({ _id: req.params.id })
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }
})

exports.router = router