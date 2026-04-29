import { Router } from "express";
import { CreateProduct, getProduct, getSingleProduct } from "../controler/ProductControler.js";
import { CategoryCreate } from "../controler/CategoryControler.js";

const route = Router()


// Category Route
route.post("/CreateCategory", CategoryCreate)


// Product Route
route.post("/CreateProduct", CreateProduct)
route.get("/get/:id", getProduct)
route.get("/singleget/:id", getSingleProduct)


export default route