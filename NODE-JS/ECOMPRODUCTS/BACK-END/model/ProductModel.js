import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    }
}, {timestamps: true})

export const newProductSchema = mongoose.model("list", ProductSchema)