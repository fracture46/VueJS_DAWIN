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
    console.log(editedMovie.title, editedMovie.year, editedMovie.synopsys)
    movie.title = editedMovie.title;
    movie.year = parseInt(editedMovie.year);
    movie.synopsys = editedMovie.synopsys;
    res.json(movie);
})

module.exports = expressRouter;

/*
app.get('/movies/:id', (req, res) => res.send(movies[req.params.id]))

app.post('/add', (req,res) => {
    console.log('Req time from object : '+req.date)
    res.send(`${parseInt(req.body['foo']) + parseInt(req.body['bar'])}`)
})*/