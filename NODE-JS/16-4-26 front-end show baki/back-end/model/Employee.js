import mongoose from 'mongoose'

const EmplooyeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    },
    department: {
        type: String,
        require: true,
    },
    salary: {
        type: String,
        require: true,
    },
    joindate: {
        type: String,
        require: true,
    }
})

const NewEmployee = new mongoose.model("list", EmplooyeSchema)