require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


app = express();
port = process.env.PORT || 3000;

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// database connection
mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => console.log('Database connected successfully'))
.catch((err) => console.error(err.message));

// import the routes folder
const router = require('./routes/user');

// using the routes
app.use('/', router)

app.listen(port, () => console.log('server connected on', port));
