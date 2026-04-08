import express from 'express'
import User from '../models/User.js'

const router = express.Router()

router.post("/Signup", async (req, res) => {
    try {
        const { name, email, password } = req.body

        let existingUser = await User.findOne({ email })

        if (existingUser) {
            return res.json({ msg: "User already exists" })
        }

        const newUser = new User({ name, email, password })
        await newUser.save()

        res.json({ msg: "Signup successful", user: newUser })

    } catch (err) {
        console.log(err)    
        res.status(500).json({ error: err.message })
    }
})

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email, password })

        if (!user) {
            return res.json({ msg: "Invalid credentials" })
        }

        res.json({ msg: "Login successful", user })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

export default router