import express, { Router } from 'express'
import { createEmployee, deleteEmployee } from '../EmployeeControler/EmployeeControl.js'


const route = Router()

route.post("/Create", createEmployee)
route.delete("/Delete/:email", deleteEmployee)


export default route