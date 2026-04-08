import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())


const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})


const User = mongoose.model("User", UserSchema)


app.post("/addUser", async (req, res) => {
    try {
        const newUser = new User(req.body)
        await newUser.save()
        res.status(200).json({ message: "Signup successful" });
    } catch (err) {
        res.status(500).send(err)
    }
})


mongoose.connect("mongodb+srv://taiarman:Taiarman09@cluster0.vg8hcw4.mongodb.net/test")
    .then(() => console.log("Mongo DB is Connect"))
    .catch(() => console.log("Mongom DB is Not Connect"))



app.listen(8080, () => {
    console.log("server is running 8080")
})