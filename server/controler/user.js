const express = require("express")
const model = require("../schema_model/user_schema")
const User = model.user
const router = express.Router()
const { hashSync, compareSync } = require("bcrypt")
const jwt = require("jsonwebtoken")

router.post("/register", async (req, res) => {
    let data = { ...req.body, password: hashSync(req.body.password, 10) }

    let item = new User(data)
    try {
        let doc = await item.save()

        res.status(201).json({ "message": "Registerd Sucessfully" })

    } catch (error) {
        res.status(400).json({ "message": error.message })
    }
})

router.post("/login", async (req, res) => {

    try {
        let user = await User.findOne({ email: req.body.email })

        if (!user) {
            return res.status(400).json({ "message": "User not found" })
        }

        if (!compareSync(req.body.password, user.password)) {
            return res.status(400).json({ "message": "password inncorrect" })
        }

        const payload = {
            name: user.name,
            id: user._id
        }

        let token = jwt.sign(payload, "password", { expiresIn: "1d" })

        return (res.status(201).json({
            "message": "Login sucessfully",
            "name": user.name,
            "userID": user._id,
            "token": "Bearer " + token
        }))
    } catch (error) {

        res.status(400).json(error.message)
    }


})

router.put("/", async (req, res) => {
    try {
        let doc = await User.findOne({ email: req.body.email })
        if (doc != null) {
            if (doc.password === req.body.password) {

                res.status(201).json({ doc, "message": "Login sucessfully" });
            } else {
                res.status(401).json({ "message": "password incorrect" });
            }
        } else {
            res.status(401).json({ "message": "email incorrect" });
        }

    } catch (err) {
        res.status(400).json(err);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        let doc = await User.findByIdAndDelete({ _id: req.params.id })
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }
})

exports.router = router