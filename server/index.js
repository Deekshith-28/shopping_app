const express = require("express")
const app = express()
const mongoose = require("mongoose")
const model = require("./schema_model/user_schema")
const User = model.user
const productRouter = require("./controler/product")
const cartRouter = require("./controler/cart")
const ordersRouter = require("./controler/orders")
const userRouter = require("./controler/user")
const paymetRouter = require("./controler/payment")
const passport = require("passport")
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const cors = require("cors")
require('dotenv').config()
const port = process.env.PORT || 3000;
let Password = process.env.password

//mongo connection
const url = `mongodb+srv://deekshith-28:${Password}@products.mndnpky.mongodb.net/E-com?retryWrites=true&w=majority`;
main().catch(err => console.log(err))
async function main() {
    await mongoose.connect(url)
    console.log("Database Connected.....")
}
app.use(cors())
app.use(express.json())

// authontication
app.use(passport.initialize())
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'password';

passport.use(new JwtStrategy(opts,
    async function (jwt_payload, done) {

        try {
            let user = await User.findOne({ _id: jwt_payload.id })

            if (user) {
                return done(null, user);
            } else {
                return done(null, false);

            }
        } catch (err) {
            return done(err, false);
        }
    }));

    //********** */ API *******************
app.use("/product", passport.authenticate("jwt", { session: false }), productRouter.router)
app.use("/cart", passport.authenticate("jwt", { session: false }), cartRouter.router)
app.use("/orders", passport.authenticate("jwt", { session: false }), ordersRouter.router)
app.use("/user", userRouter.router)
app.use("/payment", passport.authenticate("jwt", { session: false }), paymetRouter.router)

app.listen(port, () => {
    console.log("Server Started.....")
})
// http://localhost:3000/product