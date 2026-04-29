import { Category } from "../model/CategoryModel.js"


export const CategoryCreate = async (req, res) => {
    try {
        const {name} = req.body

        if (!name) {
            return res.status(400).json({
                status: false,
                message: 'Fill details'
            })
        }

        const exitsCategory = await Category.findOne({ name })

        if (exitsCategory) {
            return res.status(400).json({
                status: false,
                message: "Already created"
            })
        }

        const category = await Category.create({ name })
        

        res.status(201).json({
            status: true,
            message: "Create Succesfully!",
            data: category
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: `Server error not create category ${error.message}`
        })
    }
}