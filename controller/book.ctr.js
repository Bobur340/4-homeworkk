const BookSchema = require("../schema/book.schema");

const getAllBooks = async (req, res) => {
    try {
        const books = await BookSchema.find();
        res.status(200).json(books);
    } catch (error) {
        console.log(error.message);
    }
}

const addBook = async (req, res) => {
    try {
        const { title, authorId, period, pages, publishedYear, genre, publishedHome, desc } = req.body

        await BookSchema.create({
            title, authorId, period, pages, publishedYear, genre, publishedHome, desc
        })
        res.status(201).json({
            message: "Added new book"
        })
    } catch (error) {
        console.log(error.message);
    }
}

const getOneBook = async (req, res) => {
    try {
        const { id } = req.params
        const book = await BookSchema.findById(id)
        res.status(200).json(book)

    } catch (error) {
        console.log(error.message);
    }
}

const updateBook = async (req, res) => {
    try {
        const { id } = req.params
        const { title, authorId, period, pages, publishedYear, genre, publishedHome, desc } = req.body
        await BookSchema.findByIdAndUpdate(id, {
            title, authorId, period, pages, publishedYear, genre, publishedHome, desc
        })
        res.status(200).json({
            message: "Book updated"
        })
    } catch (error) {
        console.log(error.message);
    }
}
const deleteBook = async (req, res) => {
    try {
        const { id } = req.params
        await BookSchema.findByIdAndDelete(id)
        res.status(200).json({
            message: "Book deleted"
        })
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getAllBooks,
    addBook,
    getOneBook,
    updateBook,
    deleteBook
}