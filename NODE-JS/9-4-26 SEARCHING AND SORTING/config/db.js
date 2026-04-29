import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const Port =process.env.Mongo_url

export const dbConnect = async (req, res) => {
    try {
        mongoose.connect(Port)
        console.log("Mongo DB is Connect")
    } catch (error) {
        console.log("Mongo DB is Not Connect")
    }
}