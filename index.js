const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.config');
const AuthorRouter = require('./router/author.routes');
const BookRouter = require('./router/book.routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

connectDB()


// Router
app.use(AuthorRouter)
app.use(BookRouter)



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

