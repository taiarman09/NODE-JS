import express, { Router } from 'express'
import {getAllEmployee} from '../EmployeeControler/EmployeeControl.js'


const route = Router()


route.get("/", getAllEmployee)



export default route