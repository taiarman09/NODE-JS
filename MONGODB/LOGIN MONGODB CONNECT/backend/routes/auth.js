import express from "express"
import User from "../Models/User.js"

const router = express.Router()

// SIGNUP
router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body

        let user = await User.findOne({ email })
        if (user) {
            return res.json({ msg: "User already exists" })
        }

        user = new User({ name, email, password })
        await user.save()

        res.json({ msg: "Signup successful", user })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})


// LOGIN
router.post("/login", async (req, res) => {
    try {
        console.log(req.body)   // 👈 ye add kar

        const { email, password } = req.body

        const user = await User.findOne({ email, password })

        console.log(user)       // 👈 ye bhi add kar

        if (!user) {
            return res.json({ msg: "Invalid credentials" })
        }

        res.json({ msg: "Login successful", user })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

export default router