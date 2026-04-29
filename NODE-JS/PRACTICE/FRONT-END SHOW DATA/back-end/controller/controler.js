import express from 'express'
import { StudentSchema } from '../module/module.js'

export const getall = async (req, res) => {
    try {

        const { Search, sortBy, Order, page = 1, limit = 5 } = req.query

        let query = {}

        if (Search) {
            query = {
                $or: [
                    { name: { $regex: "^" + Search, $options: "i" } },
                    { course: { $regex: "^" + Search, $options: "i" } }
                ]
            }
        }

        const sortOptions = {}

        if (sortBy) {
            sortOptions[sortBy] = Order === "desc" ? -1 : 1
        }

        const pageNumber = Number(page)
        const limitNumber = Number(limit)
        const skip = (pageNumber - 1) * limitNumber

        const total = await StudentSchema.countDocuments(query)

        const student = await StudentSchema.find(query)
            .sort(sortOptions)
            .skip(skip)
            .limit(limitNumber)

        return res.status(200).json({
            status: true,
            message: "Student Get all",
            total,
            page: pageNumber,
            totalPage: Math.ceil(total / limitNumber),
            data: student
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ status: false, message: "Internal Server Error" })
    }

}