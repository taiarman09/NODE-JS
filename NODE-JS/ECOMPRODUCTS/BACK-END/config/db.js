import mongoose from "mongoose"

export const dbConnect = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URL}`)
        console.log("Mongo DB is Connected")
    } catch (error) {
        console.log(`Mongo DB is Not Connected ${error.message}`)
    }
}