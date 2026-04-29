import express from 'express'
import dotenv from 'dotenv'
import { dbConnect } from './config/db.js'
import routes from './route/EmployeeRouter.js'

dotenv.config()
const app = express()
app.use(express.json())

const Port = process.env.PORT


await dbConnect()

app.use('/api/employee', routes)

app.listen(Port, () => {
    console.log(`Server is Running on PORT ${Port}`)
})