import { emplooyeData } from '../model/Employee.js'


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