import { emplooyeData } from '../model/Employee.js'

export const createEmployee = async (req, res) => {
    try {
        const { name, age, email, department, salary } = req.body

        if (!name || !age || !email || !department || !salary) {
            return res.status(400).json({
                status: false,
                message: "Payout First Fill!"
            })
        }

        const newEmployeeData =new emplooyeData({ name, age, email, department, salary })
        await newEmployeeData.save()

        res.status(201).json({
            status: true,
            message: "Employee Create",
            data: newEmployeeData
        })

    } catch (error) {
        console.log(`Server Error ${error.message}`)
    }
}


export const updateEmployee = async (req, res) => {
    const { email } = req.params
    const { name, age, department, salary } = req.body


    if (!name || !age || !department || !salary) {
        return res.status(400).json({
            status: false,
            message: "Fill All Details"
        })
    }

    const Update =await emplooyeData.findOneAndUpdate({ email }, { name, age, department, salary }, {new: true})

    if (!Update) {
        return res.status(404).json({
            status: false,
            message: "Not found",
        })
    }

    res.status(200).json({
        status: true,
        message: "Update Successful",
        data: Update
    })
}


export const deleteEmployee = async (req, res) => {
    try {
        const { email } = req.params

        const EmployeFind = await emplooyeData.findOneAndDelete({ email })

        if (!EmployeFind) {
            return res.status(400).json({
                status: false,
                message: "DAta not Found"
            })
        }

        res.status(200).json({
            status: true,
            message: "Delete Employee Data",
            data: EmployeFind
        })
    } catch (error) {
        console.log(`server error ${error.message}`)
    }
}





export const bulkEmployee = async (req, res) => {
    const employe = req.body

    if (!Array.isArray(employe)) {
        return res.status(400).json({
            status: false,
            message: "Data not array of object"
        })
    }


    const result = await emplooyeData.insertMany(employe)


    return res.status(201).json({
        status: true,
        message: "All Succesfull",
        data: result
    })
}


export const getAllEmployee = async (req, res) => {
    try {
        const { Search, setSort, Order } = req.query

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


        const employees = await emplooyeData.find(query).sort(sortOption)

        return res.json({
            status: true,
            message: "employee Get",
            data: employees
        })

    } catch (error) {
        console.log(error.message)
        return res.status(400).json({
            status: false,
            message: `Error in getAll Employee  ${error.message}`
        })
    }
}