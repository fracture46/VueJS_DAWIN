const express = require('express')
const path = require('path')
var axios = require('axios');

var expressRouter = express.Router();

expressRouter.route('/movies/all').get(function(req, res) {
    res.json(Movies);
})

expressRouter.route('/movies/add').post(function(req, res) {
    var movie = req.body;
    Movies.push(movie);
    res.json(movie);
})

expressRouter.route('/movies/:id').get(function(req, res) {
    var movie = Movies[req.params.id];
    res.json(movie);
})

expressRouter.route('/movies/:id').post(function(req, res) {
    var movie = Movies[req.params.id];
    var editedMovie = req.body;
    movie.title = editedMovie.title;
    movie.year = parseInt(editedMovie.year);
    movie.language = editedMovie.language;
    movie.genre = editedMovie.genre;
    movie.director.name = editedMovie.director.name;
    movie.director.nationality = editedMovie.director.nationality;
    movie.director.birthdate = movie.director.birthdate;

    res.json(movie);
})

expressRouter.route('/movies/:id/addRate').post(function(req, res) {
    var movie = Movies[req.params.id];
    var newRate = req.body;
    console.log(req.body, newRate, newRate.rate, parseInt(newRate.rate))
    movie.rate.push(parseInt(newRate.rate));
    res.json(movie);
})

expressRouter.route('/movies/:id/delete').post(function(req, res) {
    var movie = Movies[req.params.id];
    Movies.splice(req.params.id, 1);
    res.json(movie);
})

module.exports = expressRouter;