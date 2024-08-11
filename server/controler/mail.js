const express = require("express")
const model = require("../schema_model/user_schema")
const User = model.user
const router = express.Router()

router.get("/:id", async (req, res) => {
    let id = req.params.id
    console.log("requested..")
    try {
        let user = await User.findByIdAndUpdate({ _id: id }, { isVerify: 1 }, { new: true })
        res.status(200).send("<h2>Successfully Verified!...</h2>")
        
    } catch (error) {
        res.status(400).send("<h2>Verification Failed!...</h2>")
    }
})

module.exports = { router }