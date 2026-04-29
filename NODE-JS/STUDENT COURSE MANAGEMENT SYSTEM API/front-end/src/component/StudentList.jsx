import React, { useEffect, useState } from 'react'
import { createStudent, getstudent } from '../api/api'

function StudentList() {

    const [student, setStudent] = useState([])
    const [form, setForm] = useState({
        name: "",
        age: "",
        course: "",
        email: "",
        fees: ""
    })
    const [totalPage, setTotalPage] = useState(1)

    const [params, setParams] = useState({
        search: "",
        sortBy: "",
        order: "",
        page: 1,
        limit: 3
    })

    const onchange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

            const res = await createStudent(form)
            if (res.status === false) {
                alert(res.message)
                return
            }

            fetchStudent()

            setForm({
                name: "",
                age: "",
                course: "",
                email: "",
                fees: ""
            })

        } catch (error) {
            console.log(error)
        }

    }

    const fetchStudent = async () => {
        try {
            const res = await getstudent(params)
            setStudent(res.data || [])
            setTotalPage(res.totalPage || 1)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchStudent()
    }, [params])

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-purple-100 p-6">

            {/* TITLE */}
            <h1 className="text-4xl font-bold text-center text-indigo-700 mb-6">
                🎓 Student List
            </h1>

            <div className='flex w-full h-[100%] items-center'>
                <div className="w-[50%] flex justify-center">
                    <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-md">

                        <h2 className="text-2xl font-semibold text-indigo-600 mb-5 text-center">
                            ➕ Add Student
                        </h2>

                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

                            <input
                                type="text"
                                name='name'
                                placeholder="Enter Name"
                                value={form.name}
                                onChange={onchange}
                                className="px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />

                            <input
                                type="number"
                                name='age'
                                placeholder="Enter Age"
                                value={form.age}
                                onChange={onchange}
                                className="px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />

                            <input
                                type="email"
                                name='email'
                                placeholder="Enter Email"
                                value={form.email}
                                onChange={onchange}
                                className="px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />

                            <input
                                type="text"
                                name='course'
                                placeholder="Enter Course"
                                value={form.course}
                                onChange={onchange}
                                className="px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />

                            <input
                                type="number"
                                name='fees'
                                placeholder="Enter Fees"
                                value={form.fees}
                                onChange={onchange}
                                className="px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />

                            <button
                                className="bg-indigo-500 text-white py-2 rounded-xl hover:bg-indigo-600 transition"
                            >
                                Create Student
                            </button>

                        </form>
                    </div>
                </div>
                <div className="w-[50%] bg-white p-6 rounded-2xl shadow-md">

                    {/* CONTROLS */}
                    <div className="flex flex-wrap justify-between items-center gap-4 mb-6">

                        <input
                            type="text"
                            placeholder="🔍 Search student..."
                            value={params.search}
                            onChange={(e) =>
                                setParams({ ...params, search: e.target.value, page: 1 })
                            }
                            className="px-4 py-2 rounded-xl border w-full md:w-[40%] focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />

                        <div className="flex gap-3">
                            <select
                                value={params.sortBy}
                                onChange={(e) =>
                                    setParams({ ...params, sortBy: e.target.value })
                                }
                                className="px-4 py-2 rounded-xl border"
                            >
                                <option value="">Sort</option>
                                <option value="name">Name</option>
                                <option value="age">Age</option>
                            </select>

                            <select
                                value={params.order}
                                onChange={(e) =>
                                    setParams({ ...params, order: e.target.value })
                                }
                                className="px-4 py-2 rounded-xl border"
                            >
                                <option value="">Order</option>
                                <option value="asc">⬆ascending</option>
                                <option value="desc">⬇descending</option>
                            </select>
                        </div>
                    </div>

                    {/* LIST */}
                    {
                        student.length === 0 ? (
                            <h2 className="flex justify-center items-center min-h-[400px] text-xl text-gray-500">
                                No Data Found 😢
                            </h2>
                        ) : (
                            <div className="flex flex-col gap-4 min-h-[400px] pr-2">

                                {student.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center bg-gray-50 hover:bg-indigo-50 border rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300"
                                    >

                                        {/* LEFT INFO */}
                                        <div>
                                            <h3 className="text-lg font-semibold text-indigo-600">
                                                {item.name}
                                            </h3>

                                            <p className="text-sm text-gray-600">
                                                Age: {item.age} | Course: {item.course}
                                            </p>

                                            <p className="text-sm text-gray-500">
                                                {item.email}
                                            </p>

                                            <p className="text-sm font-medium text-gray-700">
                                                ₹ {item.fees}
                                            </p>
                                        </div>

                                        {/* ACTION BUTTONS */}
                                        <div className="flex gap-2">

                                            <button className="px-3 py-1 text-sm bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition">
                                                ✏️ Update
                                            </button>

                                            <button className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                                                🗑️ Delete
                                            </button>

                                        </div>
                                    </div>
                                ))}

                            </div>
                        )
                    }

                    {/* PAGINATION */}
                    <div className="mt-6 flex justify-center items-center gap-6">

                        <button
                            disabled={params.page === 1}
                            onClick={() =>
                                setParams({ ...params, page: params.page - 1 })
                            }
                            className="px-4 py-2 bg-indigo-500 text-white rounded-lg disabled:bg-gray-300 hover:bg-indigo-600 transition"
                        >
                            Prev
                        </button>

                        <span className="text-lg font-medium text-gray-700">
                            Page {params.page} / {totalPage}
                        </span>

                        <button
                            disabled={params.page === totalPage}
                            onClick={() =>
                                setParams({ ...params, page: params.page + 1 })
                            }
                            className="px-4 py-2 bg-indigo-500 text-white rounded-lg disabled:bg-gray-300 hover:bg-indigo-600 transition"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StudentList