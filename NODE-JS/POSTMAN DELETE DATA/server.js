import express from 'express'

const app = express()
app.use(express.json())

const users = [
    {
        id: 1,
        name: "arman",
        age: 18
    },
    {
        id: 2,
        name: "ayan",
        age: 18
    },
    {
        id: 3,
        name: "zed",
        age: 18
    }
]


// app.post('/userCreate', (req, res)=>{
//     const {id, name, age} = req.body

//     const IndexUser = users.find(u => u.id === id)

//     if(IndexUser){
//         return res.status(404).json({
//             status: true, 
//             message: "User already exits",
//         })
//     }
//     const newUser = { id, name, age };
//     users.push(newUser)
//     return res.status(202).json({
//         status : true,
//         message: "Create Successful!",
//         data : users
//     })

// })


// app.get('userGet', (req, res)=>{
//     return res.status(150).json({
//         status: true,
//         message: "Show Data",
//         data : users
//     })
// })



app.put('/userUpdate', (req, res) => {
    const {id, name, age } = req.body

    const index = users.find(u => u.id === id)

    if (!index) {
        return res.status(404).json({
            status: false,
            message: "Data Not Found"
        })
    }

    if(name) index.name = name
    if(age) index.age = age


    return res.status(200).json({
        status: true,
        message: "Data Update",
        data: users
    })


})





app.delete('/userDelete', (req, res) => {
    const id = parseInt(req.query.id)

    const index = users.findIndex(user => user.id === id)

    if (index == -1) {
        return res.status(404).json({
            status: false,
            message: "Data Not Found"
        })
    }


    users.splice(index, 1)
    return res.status(200).json({
        status: true,
        message: "Data Delete",
        data: users
    })

})



app.listen(3000, () => {
    console.log("Server is running on 3000 port")
})