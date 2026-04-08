import express from 'express'
import mongoose from 'mongoose'


const app = express()
app.use(express.json())


mongoose.connect("mongodb+srv://taiarman:Taiarman09@cluster0.vg8hcw4.mongodb.net/product")
    .then(() => console.log("Mongo DB is Connect"))
    .catch(() => console.log("Mongo DB is Not Connect"))

const menSchema = new mongoose.Schema({
    id:Number,
    img: String,
    title: String,
    price: Number,
    setPrice: Number
})

const Menproduct = mongoose.model("Menproduct ", menSchema)

app.post("/add", async (req, res) => {
    try {
        const { id,img, title, price, setPrice } = req.body

        const newUser = new Menproduct({
            id,
            img,
            title,
            price,
            setPrice
        })

        await newUser.save()


        return res.status(201).json({
            status: true,
            message: "Successfull",
            data: newUser
        })
    } catch (err) {
        console.log(err)
    }

})




app.listen(8080, () => {
    console.log("Server is running on port 8080")
})