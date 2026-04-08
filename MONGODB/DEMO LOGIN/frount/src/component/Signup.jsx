import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'

function Signup() {

    const [check, setCheck] = useState(false)

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        conpassword: ""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // password match check
        if (form.password !== form.conpassword) {
            alert("Passwords do not match ❌");
            return;
        }

        try {
            const { name, email, password } = form;

            const res = await fetch("http://localhost:8080/addUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, password })
            });

            const data = await res.json();

            if (res.ok) {
                alert(data.message); // ✅ Signup Successfully
                navigate("/"); // redirect to login page
            } else {
                alert("Something went wrong ❌");
            }

        } catch (err) {
            console.log(err);
            alert("Server error ❌");
        }
    }

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-4">

            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">

                <h1 className="text-2xl font-bold text-center text-gray-800">
                    Sign Up
                </h1>

                <form className="space-y-3 mt-4" onSubmit={handleSubmit}>

                    <input
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="Name"
                        className="w-full px-4 py-2 border rounded-lg"
                    />

                    <input
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-lg"
                    />

                    <input
                        name='password'
                        value={form.password}
                        onChange={handleChange}
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-lg"
                    />

                    <input
                        name='conpassword'
                        value={form.conpassword}
                        onChange={handleChange}
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full px-4 py-2 border rounded-lg"
                    />

                    <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" onChange={(e) => setCheck(e.target.checked)} />
                        I agree to terms
                    </label>

                    <button
                        disabled={!check}
                        type='submit'
                        className="w-full bg-blue-500 text-white py-2 rounded-lg"
                    >
                        Sign Up
                    </button>

                    <p className="text-center text-sm">
                        Already have account? <Link to="/">Login</Link>
                    </p>

                </form>
            </div>
        </div>
    )
}

export default Signup