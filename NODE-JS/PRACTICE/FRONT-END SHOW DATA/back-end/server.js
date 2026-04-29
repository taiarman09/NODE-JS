import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { dbConnect } from './config/db.js'
import route from './router/routes.js'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/student", route)



await dbConnect()


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})