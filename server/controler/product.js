const express = require("express")
const model = require("../schema_model/product_schema")
const Products = model.product
const router = express.Router()

router.post("/", async (req, res) => {

    let product = new Products(req.body)
    try {
        let doc = await product.save()
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }
})

router.get("/", async (req, res) => {
    try {
        let doc = await Products.find()

        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }
})

router.get("/:id", async (req, res) => {

    try {
        let doc = await Products.findOne({ _id: req.params.id })
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        let doc = await Products.findByIdAndDelete({ _id: req.params.id })
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }
})

router.put("/filter", async (req, res) => {

    try {
        let doc = await Products.find()
        if (req.body.priceF == "high") {
            doc.sort((a, b) => b.price - a.price)
        }
        if (req.body.priceF == "low") {
            doc.sort((a, b) => a.price - b.price)
        }
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }
})

router.put("/search", async (req, res) => {

    try {
        doc = await Products.find({ name: { $regex: req.body.value, $options: 'i' } })
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }

})

router.patch("/:id", async (req, res) => {

    try {
        doc = await Products.findOneAndReplace({ _id: req.params.id }, req.body, { new: true })
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }

})


exports.router = router