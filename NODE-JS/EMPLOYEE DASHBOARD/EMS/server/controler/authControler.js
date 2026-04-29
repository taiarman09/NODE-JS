import JWT from 'jsonwebtoken'
import User from '../models/User.js'
import bcrypt from 'bcrypt'


export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({
                status: false,
                error: "not found"
            })
        }

        if (!password) {
            return res.status(500).json({
                status: false,
                error: "Server Error"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(404).json({
                status: false,
                error: "wrong password"
            })
        }

        const token = JWT.sign({ _id: user._id, role: user.role },
            process.env.JWT_KEY, { expiresIn: "10d" }
        )

        res.status(200).json({
            status: true,
            message: "Successfully!",
            token,
            user: { _id: user._id, name: user.name, role: user.role },
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}