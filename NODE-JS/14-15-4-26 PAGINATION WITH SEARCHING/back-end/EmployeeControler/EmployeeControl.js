import { emplooyeData } from '../model/Employee.js'


export const getAllEmployee = async (req, res) => {
    try {
        const { Search, setSort, Order, page, limit } = req.query


        if (page < 1) page = 1
        if (limit < 1) limit = 5
        if (limit > 50) limit = 50


        let query = {}

        if (Search) {
            query = {
                $or: [
                    { name: { $regex: "^" + Search, $options: "i" } },
                    { department: { $regex: "^" + Search, $options: "i" } }
                ]
            }
        }

        const sortOption = {}

        if (setSort) {
            sortOption[setSort] = Order === "desc" ? -1 : 1
        }


        const skip = (page - 1) * limit
        const employees = await emplooyeData.find(query).sort(sortOption).skip(skip).limit(limit)

        const total = await emplooyeData.countDocuments(query)


        return res.json({
            status: true,
            message: "employee Get",
            data: employees,
            pagination: {
                total,
                currentPage: page,
                totalPages: Math.ceil(total / limit),
                perPage: limit
            }

        })

    } catch (error) {
        console.log(error.message)
        return res.status(400).json({
            status: false,
            message: `Error in getAll Employee  ${error.message}`
        })
    }
}