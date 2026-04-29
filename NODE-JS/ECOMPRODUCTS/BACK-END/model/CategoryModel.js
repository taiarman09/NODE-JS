import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

export const Category = mongoose.model("list1", CategorySchema)