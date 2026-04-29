import express from 'express'
import mongoose from 'mongoose'

const User = mongoose.Schema({
    name: { type: String, require: true },
    age: { type: Number, require: true },
    email: { type: String, require: true }
})

export const newUser = new mongoose.model("lists", User)