import mongoose from 'mongoose'

export const dbConnect = async (req, res)=>{
    try {
        mongoose.connect("mongodb+srv://taiarman:Taiarman09@cluster0.vg8hcw4.mongodb.net/")
        console.log("Mongo DB is Connect")
    } catch (error) {
        console.log("Mongo DB is Not Connect")
    }
}