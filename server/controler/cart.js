const express = require("express")
const model = require("../schema_model/cart_schema")
const Cart = model.cart
const router = express.Router()



router.post("/add", async (req, res) => {
    let data = {
        "userID": req.body.userID,
        "items": [{
            "_id": req.body._id,
            "name": req.body.name,
            "details": req.body.details,
            "price": req.body.price,
            "sellerid": req.body.sellerid,
            "photo": req.body.photo,
            "qty": req.body.qty
        }]
    }
    try {
        let doc = await Cart.findOne({ userID: req.body.userID })
        // new user 
        if (!doc) {
            let product = new Cart(data)
            await product.save()
            return res.status(201).json({ "message": "Item Added Sucessfully" });
        }

        let ele = await Cart.find({ userID: req.body.userID, items: { $elemMatch: { _id: req.body._id } } })
        //    exist user 
        if (ele.length == 0) {
            doc.items.push(data.items[0])
            await Cart.updateOne({ userID: req.body.userID }, doc)
            return res.status(201).json({ "message": "Item Added Sucessfully" })

        } else {
            res.status(400).json({ "message": "Item Already present in Cart" })
        }

    } catch (error) {
        res.status(400).json(err.message)
    }
})

router.get("/:id", async (req, res) => {
    try {
        let doc = await Cart.findOne({ userID: req.params.id })
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }
})

// Quntity increment 
router.put("/:id", async (req, res) => {

    try {
        const doc = await Cart.findOneAndUpdate(
            { userID: req.body.userid, 'items._id': req.body._id },
            { $set: { 'items.$.qty': req.body.qty } },
            { new: true }
        );

        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }
})

router.delete("/:id", async (req, res) => {

    try {
        let doc = await Cart.updateOne({ userID: req.body.userid }, { $pull: { items: { _id: req.params.id } } })

        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }
})



exports.router = router