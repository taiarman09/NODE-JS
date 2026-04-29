const BASE_URL = 'http://localhost:8080/api/student'


export const getstudent = async (params = {}) => {


    const query = new URLSearchParams(params).toString()

    const res = await fetch(`${BASE_URL}/getall?${query}`)

    return res.json()

}