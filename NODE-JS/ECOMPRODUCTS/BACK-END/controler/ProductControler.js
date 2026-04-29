import { newProductSchema } from "../model/ProductModel.js"

export const CreateProduct = async (req, res) => {
    try {

        const { name, price, description, image, categoryId } = req.body

        if (!name || !price || !description || !image || !categoryId) {
            return res.status(400).json({
                status: false,
                message: "All fields are required",
            })
        }

        const ExitsName = await newProductSchema.findOne({ name })

        if (ExitsName) {
            return res.status(400).json({
                status: false,
                message: "Product already added",
            })
        }

        const newproduct = new newProductSchema({ name, price, description, image, categoryId })
        await newproduct.save()

        return res.status(201).json({
            status: true,
            message: "Product Create Succesfully!",
            data: newproduct
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: `Server Error ${error.message}`
        })
    }
}

export const getProduct = async (req, res) => {
    try {
        const { id } = req.params

        if (!id) {
            return res.status(404).json({
                status: false,
                message: "Data Not FOund"
            })
        }

        const products = await newProductSchema.find({ categoryId: id }).sort({ createdAt: -1 })

        return res.status(200).json({
            status: true,
            message: "Data Got All",
            data: products
        })
    } catch (error) {
        return res.status(400).json({
            status: false,
            message: `Server error data got ${error.message}`
        })
    }
}


export const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params

        if (!id) {
            return res.status(404).json({
                status: false,
                message: "Data Not FOund"
            })
        }


        const result = await newProductSchema.findById(id)

        return res.status(200).json({
            status: true,
            message: "Data Single Got",
            data: result
        })

    } catch (error) {
        return res.status(400).json({
            status: false,
            message: `Server error data got ${error.message}`
        })
    }
}