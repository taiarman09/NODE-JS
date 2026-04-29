import express from 'express'
import { getStudent } from '../../front-end/src/api/api.js'
import { newUser } from '../module/User.js'


export const getall = async (req, res) => {
    try {

        const { Search, sortBy, Order, page = 1, limit = 5 } = req.query

        let query = {}

        if (Search) {
            query = {
                $or: [
                    { name: { $regex: "^" + Search, $options: "i" } },
                    { email: { $regex: "^" + Search, $options: "i" } }
                ]
            }
        }

        let sortOption = {}

        if (sortBy) {
            sortOption[sortBy] = Order === "desc" ? -1 : 1
        }

        const studentss = await newUser.find(query)
        .sort(sortOption)

        res.status(200).json({
            status: true,
            message: "Data Got All",
            data: studentss
        })

    } catch (error) {
        console.log(error.message)
    }
}