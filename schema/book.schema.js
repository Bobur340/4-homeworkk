const { Schema, model } = require("mongoose");

const Book = new Schema({
    title:{
        type: String,
        allowNull: false
    },
        authorId:{
        type: String,
        allowNull: false
    },
        period:{
        type: String,
        allowNull: false
    },
        pages:{
        type: String,
        allowNull: false
    },
        publishedYear:{
        type: String,
        allowNull: false
    },
        genre:{
        type: String,
        allowNull: false
    },
        publishedHome:{
        type: String,
        allowNull: false
    },
        desc:{
        type: String,
        allowNull: false
    }
},
{
    versionKey: false,
    timestamps: true
}
)
const BookSchema = model("Book", Book)
module.exports = BookSchema