const { Schema, model } = require("mongoose");

const Author = new Schema({
    full_name:{
        type: String,
        allowNull: false
    },
    date_of_birth:{
        type: String,
        allowNull: false
    },
    date_of_death:{
        type: String,
        allowNull: false,
        default: null
    },
        creativity:{
        type: String,
        allowNull: false
    },
        bio:{
        type: String,
        allowNull: false
    },
        photo:{
        type: String,
        allowNull: false
    },


},
{
    versionKey: false,
    timestamps: true
}
)
const AuthorSchema = model("Author", Author)
module.exports = AuthorSchema