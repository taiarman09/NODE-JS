import express, { Router } from 'express'
import { deleteEmployee, updateEmployee } from '../EmployeeControler/EmployeeControl.js'


const route = Router()

route.put("/Update/:email", updateEmployee)
route.delete("/Delete/:email", deleteEmployee)


export default route