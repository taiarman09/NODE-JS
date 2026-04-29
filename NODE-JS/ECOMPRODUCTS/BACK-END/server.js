import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { dbConnect } from './config/db.js'
import route from './router/route.js'
dotenv.config()


const app = express()
app.use(express.json())
app.use(cors())

await dbConnect()


app.use("/api/product", route)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})