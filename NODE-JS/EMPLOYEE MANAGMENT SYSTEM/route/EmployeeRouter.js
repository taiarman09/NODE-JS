import express, { Router } from 'express'
import { bulkEmployee, createEmployee, deleteEmployee, getAllEmployee, updateEmployee } from '../EmployeeControler/EmployeeControl.js'


const route = Router()

route.post("/Create", createEmployee)
route.delete("/Delete/:email", deleteEmployee)
route.post("/allCretae" , bulkEmployee)
route.get("/get", getAllEmployee)
route.put("/Update/:email", updateEmployee)


export default route