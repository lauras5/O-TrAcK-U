const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const Anime = require('./models/AnimeModel');

const app = express();

const PORT = process.env.PORT || 3001;

// allows you to use nexted js objects together
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// public is starting point for static files
app.use(express.static(path.join(__dirname, '..', 'client', 'build')))

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/otracku';

mongoose.Promise = Promise;

mongoose.connect(MONGODB_URI);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("../client/build"));
}

app.get("/", (req, res) => {
    res.sendFile(__dirname, '../client/public/index.html');
});

app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`)
});
