import mongoose, { Types } from 'mongoose'


const EmployeeSchema = new mongoose.Schema({
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
        require: true
    },
    department : {
        type: String,
        require: true
    },
    salary: {
        type: Number,
        require: true
    }
})

export const emplooyeData = mongoose.model("list", EmployeeSchema)