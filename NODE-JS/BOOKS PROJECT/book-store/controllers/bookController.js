import book from "../data/books.js"



export const addBook = async (req, res) => {
    try {
        const { id, title, author, price } = req.body

        if (!id || !title || !author || !price) {
            return res.status(400).json({
                status: false,
                message: "Fill All Details"
            })
        }

        const newBook = new book({ id, title, author, price })
        await newBook.save()
        res.status(202).json({
            status: true,
            message: "Book Added Successfully",
            data: newBook
        })

    } catch (err) {
        console.log(err)
    }
}


export const deleteBook = async (req, res) => {
    try {
        const { id } = req.body

        const Exit = await book.findOneAndDelete({ id })

        if (!Exit) {
            return res.status(404).json({
                status: false,
                message: "Data not found",
            })
        }

        res.status(200).json({
            status: true,
            message: "Delete Successfull!",
            data: Exit
        })
    } catch (err) {
        console.log(err)
    }
}






export const updateBook = async (req, res) => {
    const { id, title, author, price } = req.body

    if (!id || !title || !author || !price) {
        return res.status(400).json({
            status: false,
            message: "Fill All Details"
        })
    }

    const Update =await book.findOneAndUpdate({ id }, { title, author, price })

    if (!Update) {
        return res.status(404).json({
            status: false,
            message: "Not found",
        })
    }

    res.status(200).json({
        status: true,
        message: "Update Successful",
        data: Update
    })
}