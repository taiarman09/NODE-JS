import express from 'express'
import { dbConnect } from './config/db.js'


const app = express()
app.use(express.json())

await dbConnect()


app.listen(8080, (error)=>{
    console.log(`Server is Running on port`)
})