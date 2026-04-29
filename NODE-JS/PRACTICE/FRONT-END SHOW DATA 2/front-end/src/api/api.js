const BASE_URL = 'http://localhost:8080/api/students'


export const getStudent = async (params = {}) => {
    const query = new URLSearchParams(params).toString()

    const res = await fetch(`${BASE_URL}/getall?${query}`)
    return res.json()
}