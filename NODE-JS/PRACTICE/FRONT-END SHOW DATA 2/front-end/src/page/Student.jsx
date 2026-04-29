import React from 'react'
import { useState } from 'react'
import { getStudent } from '../api/api'
import { useEffect } from 'react'

function Student() {

  const [Student, setStudent] = useState([])

  const [params, setParams] = useState({
    Search: "",
    sortBy: "",
    Order: "asc"
  })

  const fetchData = async () => {
    try {

      const res = await getStudent(params)
      setStudent(res.data)

    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [params])

  return (
    <div>
      <input type="text" placeholder='search' onChange={(e) => setParams({...params, Search: e.target.value})} />
      <select onChange={(e)=> setParams({...params, sortBy: e.target.value})}>
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="email">Email</option>
      </select>
      <select onChange={(e)=> setParams({...params, Order: e.target.value})}>
        <option value="asc">asc</option>
        <option value="desc">desc</option>
      </select>
      {
        Student.length === 0 ? (
          <h1>Not Found</h1>
        ) : (
          <div>
            {
              Student.map((item, idnex) => (
                <div key={idnex}>
                  <p>{item.name}</p>
                  <p>{item.age}</p>
                  <p>{item.email}</p>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default Student
