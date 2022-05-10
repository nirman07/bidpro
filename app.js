var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mainRoute = require('./routes/routes');
var app = express();

const mongoose = require('mongoose')

const url = `mongodb+srv://bidpro:KH91f8HE7HN3CB6p@cluster0.dvodt.mongodb.net/test`;

mongoose.connect(url)
    .then(() => {
        console.log('Connected to the database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1', mainRoute);


//This is SHIVANSH typing.....

module.exports = app;
