import express from 'express'
import mongoose, { mongo } from 'mongoose'


const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://taiarman:Taiarman09@cluster0.vg8hcw4.mongodb.net/")
    .then(() => console.log("Mongo DB is Connect"))
    .catch(() => console.log("Mongo DB is Not Connect"))


const userSchema = new mongoose.Schema({
    name: String,
    email: String
})

const User = mongoose.model('User', userSchema)


app.post('/user',async (req, res)=>{
    try{
        const {name, email} = req.body

        if(!name || !email){
            return res.status(400).json({
                message : "Name and Email required"
            })
        }

        const newUser = new User({name, email})
        await newUser.save()


        res.json({
            message: "Data saved successfully",
            data: newUser
        })

    }catch(err){
        console.log(err)
        return res.status(500).json({
            message: "Something went wrong"
        })
    }
})

app.listen(8080, () => {
    console.log("Server runnig on port")
})