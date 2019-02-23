const express = require('express')
const path = require('path')
const multer = require('multer')

var expressRouter = express.Router();

//Define where poster files will be stored
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/static/')
    },
    filename: function (req, file, cb) {
        crypto.pseudoRandomBytes(16, function (err, raw) {
            cb(null, raw.toString('hex') + path.extname(file.originalname));
        });
    }
});

var upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        var filetypes = /jpeg|jpg|png/;
        var mimetype = filetypes.test(file.mimetype);
        var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }

        cb("Inccorrect file type, only the following are allowed : " + filetypes);
    }
});

//Return all movies
expressRouter.route('/movies/all').get(function(req, res) {
    res.json(Movies);
})

//Add a movie
expressRouter.route('/movies/add').post(upload.single('posterFile'), function(req, res) {
    var movie = req.body;
    if (req.file !== undefined) {
        movie.poster = `${req.file.filename}`;
    }
    Movies.push(movie);
    res.json(movie);
})

//Return a movie to display
expressRouter.route('/movies/:id').get(function(req, res) {
    var movie = Movies[req.params.id];
    res.json(movie);
})

//Edit a movie
expressRouter.route('/movies/:id').post(upload.single('posterFile'), function(req, res) {
    var movie = Movies[req.params.id];
    var editedMovie = req.body;
    movie.title = editedMovie.title;
    movie.year = parseInt(editedMovie.year);
    movie.language = editedMovie.language;
    movie.genre = editedMovie.genre;
    movie.director.name = editedMovie.director.name;
    movie.director.nationality = editedMovie.director.nationality;
    movie.director.birthdate = movie.director.birthdate;

    if (req.file !== undefined) {
        movie.poster = `static/${req.file.filename}`;
    }

    res.json(movie);
})

//Add a rate to a movie
expressRouter.route('/movies/:id/addRate').post(function(req, res) {
    var movie = Movies[req.params.id];
    var newRate = req.body;
    movie.rate.push(parseInt(newRate.rate));
    res.json(movie);
})

//Delete a movie
expressRouter.route('/movies/:id/delete').post(function(req, res) {
    var movie = Movies[req.params.id];
    Movies.splice(req.params.id, 1);
    res.json(movie);
})

module.exports = expressRouter;