const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then (() => {
        console.log('connection open');
    })
    .catch( err => {
        console.log('connection error:', err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
    res.send("WOOF!")
})



app.listen(3000, () => {
    console.log("Listening on port 3000");
})