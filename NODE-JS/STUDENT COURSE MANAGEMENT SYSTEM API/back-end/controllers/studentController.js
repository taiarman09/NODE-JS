import express from 'express'
import { StudentSchema } from '../models/studentModel.js'

export const Create = async (req, res) => {
    try {
        const { name, age, email, course, fees } = req.body

        const exist = await StudentSchema.findOne({ email })

        if (exist) {
            return res.status(400).json({
                status: false,
                message: "Email already exists",
            })
        }

        if (!name || !age || email === "@gmail.com" || !course || !fees) {
            return res.status(400).json({
                status: false,
                message: "Fill The all details"
            })
        }

        const newStudent = new StudentSchema({ name, age, email, course, fees })
        await newStudent.save()


        res.status(201).json({
            status: true,
            message: "Student Create Succesfully!",
            data: newStudent
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Server Error"
        })
    }
}


export const bulk = async (req, res) => {

    const student = req.body


    if (!Array.isArray(student)) {
        return res.status(406).json({
            status: false,
            message: "Data not array of object"
        })
    }


    const result = await StudentSchema.insertMany(student)
    return res.status(201).json({
        status: true,
        message: "Student Multiply Create Successfully!",
        data: result
    })
}


export const Delete = async (req, res) => {
    try {
        const { email } = req.params

        const result = await StudentSchema.findOneAndDelete({ email })

        if (!result) {
            return res.status(404).json({
                status: false,
                message: "Data Not Found"
            })
        }

        return res.status(200).json({
            status: true,
            message: "Student Delete Successfully!",
            data: result,

        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Server Error"
        })
    }
}


export const GetAll = async (req, res) => {
    try {
        const { search, sortBy, order, page = 1, limit = 5 } = req.query

        let query = {}

        if (search) {
            query = {
                $or: [
                    { name: { $regex: "^" + search, $options: "i" } },
                    { course: { $regex: "^" + search, $options: "i" } }
                ]
            }
        }

        const sortOption = {}

        if (sortBy) {
            sortOption[sortBy] = order ?.toLowerCase() === "desc" ? -1 : 1
        }

        const pageNumber = Number(page)
        const limitNumber = Number(limit)
        const skip = (pageNumber - 1) * limitNumber

        const total = await StudentSchema.countDocuments(query)

        const student = await StudentSchema.find(query)
            .sort(sortOption)
            .skip(skip)
            .limit(limitNumber)

        return res.status(200).json({
            status: true,
            message: "Student Get all",
            total,
            page: (pageNumber),
            totalPage: Math.ceil(total / limitNumber),
            data: student
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Server Error"
        })
    }
}


export const update = async (req, res) => {
    try {
        const { id } = req.params
        const { name, age, email, course, fees } = req.body

        if (!name || !age || !email || !course || !fees) {
            return res.status(400).json({
                status: false,
                message: "Fill All Details"
            })
        }

        const updates = await StudentSchema.findByIdAndUpdate(id, { name, age, email, course, fees }, { new: true })

        if (!updates) {
            return res.status(400).json({
                status: false,
                message: "Not Found Student"
            })
        }

        return res.status(200).json({
            status: true,
            message: "Update Student Successfully!",
            data: updates
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Server Error"
        })
    }
}