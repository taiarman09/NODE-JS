import React, { useState } from "react";
import axios from 'axios'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

            const response = await axios.post("http://localhost:3000/api/auth/login", { email, password })
            console.log(response.data)

            if (response.data.status) {
                alert("login successfully!")
            }

        } catch (error) {
            if (error.response && !error.response.data.status) {
                setError(error.response.data.error)
            } else {
                setError("Server Error")
            }
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
            <div className="bg-white shadow-2xl rounded-2xl flex w-[800px] overflow-hidden">

                {/* Left Section */}
                <div className="w-1/2 bg-indigo-600 text-white flex flex-col justify-center items-center p-10">
                    <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
                    <p className="text-sm text-center">
                        Manage your employees efficiently and securely.
                    </p>
                </div>

                {/* Right Section (Form) */}
                <div className="w-1/2 p-10">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-700">
                        Employee Login
                    </h2>
                    {error && <p className="text-rose-500">{error}</p>}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>

                        <div className="flex justify-between items-center text-sm">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="accent-indigo-600" />
                                Remember me
                            </label>
                            <a href="#" className="text-indigo-600 hover:underline">
                                Forgot Password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-sm text-gray-500 mt-6 text-center">
                        Don’t have an account?{" "}
                        <a href="#" className="text-indigo-600 hover:underline">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;