import expres from 'express'
import dotenv from 'dotenv'
import { dbConnect } from './db/db.js'
import route from './route/route.js'
import cors from 'cors'
dotenv.config()

const app = expres()
app.use(expres.json())
app.use(cors())

dbConnect()
app.use('/api/students', route)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})