import express from 'express'
import dbConnect from './db/db.js'
import { route } from './routes/bookRoutes.js'


const app = express()
app.use(express.json())


dbConnect()

app.use("/api", route)

app.listen(8080, ()=>{
    console.log("Server running on port 8080")
})