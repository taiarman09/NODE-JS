import React, { useEffect, useState } from 'react'
import { getstudent } from '../api/api'

function StudentList() {

    const [student, setStudent] = useState([])
    const [totalPage, setTotalPage] = useState(1)

    const [params, setParams] = useState({
        Search: "",
        sortBy: "",
        Order: "",
        page: 1,
        limit: 5
    })


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
        <div>
            {
                student.length === 0 ? (
                    <h1>not Found</h1>
                ) : (
                    <div>
                        {
                            student.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <p>{item.name}</p>
                                        <p>{item.age}</p>
                                        <p>{item.course}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
            <button disabled={params.page === 1} onClick={() => setParams({ ...params, page: params.page - 1 })}>Prev</button>
            <button disabled={params.page === totalPage} onClick={() => setParams({ ...params, page: params.page + 1 })}>Next</button>
        </div>
    )
}

export default StudentList
