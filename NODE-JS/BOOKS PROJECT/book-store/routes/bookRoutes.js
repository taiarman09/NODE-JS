import { Router } from 'express'
import { addBook, deleteBook, updateBook } from "../controllers/bookController.js";



export const route = Router()

route.post('/add', addBook)
route.delete('/delete', deleteBook)
route.put('/update', updateBook)