import express, { Router } from 'express'
import { getall } from '../controller/controler.js'

const route = Router()

route.get('/getall', getall)

export default route