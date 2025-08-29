const AuthorSchema = require("../schema/author.schema");

const getAllAuthors = async (req, res) => {
    try {
        const authors = await AuthorSchema.find();
        res.status(200).json(authors);
    } catch (error) {
        console.log(error.message);
    }
}

const addAuthor = async (req, res) => {
    try {
        const { full_name, date_of_birth, date_of_death, creativity, bio, photo } = req.body

        await AuthorSchema.create({
            full_name, date_of_birth, date_of_death, creativity, bio, photo
        })
        res.status(201).json({
            message: "Added new author"
        })
    } catch (error) {
        console.log(error.message);
    }
}

const getOneAuthor = async (req, res) => {
    try {
    const { id } = req.params
    const author = await AuthorSchema.findById(id)
    res.status(200).json(author)

    } catch (error) {
        console.log(error.message);
    }
}


const updateAuthor = async (req, res) => {
    try {
        const { id } = req.params
        const { full_name, date_of_birth, date_of_death, creativity, bio, photo } = req.body
        await AuthorSchema.findByIdAndUpdate(id, {
            full_name, date_of_birth, date_of_death, creativity, bio, photo
        })
        res.status(200).json({
            message: "Author updated"
        })
    } catch (error) {
        console.log(error.message);
    }
}

const deleteAuthor = async (req, res) => {
    try {
        const { id } = req.params
        await AuthorSchema.findByIdAndDelete(id)
        res.status(200).json({
            message: "Author deleted"
        })
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getAllAuthors,
    getOneAuthor,
    addAuthor,
    updateAuthor,
    deleteAuthor
}