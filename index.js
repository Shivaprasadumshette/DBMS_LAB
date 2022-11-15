const express = require('express')
const app = express()
const mongoose = require("mongoose")
const UserModel = require("./models/user")

// var connectionUrl = "mongodb+srv://shiva:A0CSyfyjuR1BX2ic@cluster0.hlkgldu.mongodb.net/myDb?retryWrites=true&w=majority"
var connectionUrl = "mongodb+srv://shiva:OfApn7vkw3dFZFYZ@cluster0.hlkgldu.mongodb.net/newDb?retryWrites=true&w=majority"
// mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {

//     if (err) throw err
//     console.log("Connected")
// })

mongoose
    .connect(connectionUrl, {

    })
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));

app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")

app.get("/home", (req, res) => {
    res.render("index")
})

app.post("/api/user", (req, res) => {
    console.log(req.body);
    const SaveUser = new UserModel(req.body)
    SaveUser.save((error, savedUser) => {
        if (error) throw error
        res.json(savedUser)
    })
})

app.listen(9000, () => {
    console.log("listening to port 9000")
})