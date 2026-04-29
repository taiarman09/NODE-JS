import express from 'express'
import dotenv from 'dotenv'
import { dbConnect } from './config/db.js'
import route from './routes/studentRoutes.js'
import cors from 'cors'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

dbConnect()

app.use('/api/students', route)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})