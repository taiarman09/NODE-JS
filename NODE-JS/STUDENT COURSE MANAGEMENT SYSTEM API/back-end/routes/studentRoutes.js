import express, { Router } from 'express'
import { bulk, Create, Delete, GetAll, update } from '../controllers/studentController.js'

const route = Router()


route.post("/Create", Create)
route.post("/bulk", bulk)
route.delete("/delete/:email", Delete)
route.get("/getall", GetAll)
route.put("/update/:id", update)


export default route