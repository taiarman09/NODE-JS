const BASE_URL = "http://localhost:8080/api/students"


export const getstudent = async (params = {}) => {
    const query = new URLSearchParams(params).toString()


    const res = await fetch(`${BASE_URL}/getall?${query}`)
    return res.json()
}



export const createStudent = async (data) => {

    const res = await fetch(`${BASE_URL}/Create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return res.json()
}