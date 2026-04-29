import express, { Router } from 'express'
import { getall } from '../controler/controler.js'

const route = Router()

route.get("/getall", getall)

export default route