import mongoose from "mongoose";

const Books = new mongoose.Schema({
    id: Number,
    title: String,
    author: String,
    price: Number
})


const book = mongoose.model("book", Books)

export default book