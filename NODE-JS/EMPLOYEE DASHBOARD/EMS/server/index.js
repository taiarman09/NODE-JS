import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRouter from './routes/auth.js'
import connectToDatabase from './db/db.js'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/auth", authRouter)
connectToDatabase()


app.listen(process.env.PORT, () => {
    console.log(`Server is runnig on port ${process.env.PORT}`)
})