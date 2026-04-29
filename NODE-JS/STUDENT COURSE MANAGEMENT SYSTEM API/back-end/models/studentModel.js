import express from 'express'
import mongoose from 'mongoose'

const Student = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    course: {
        type: String,
        require: true
    },
    fees: {
        type: Number,
        require: true
    },
    status: {
        type: String
    }
})

export const StudentSchema = mongoose.model("list", Student)