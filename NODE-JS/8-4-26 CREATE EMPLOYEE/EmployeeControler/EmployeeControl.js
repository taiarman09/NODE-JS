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