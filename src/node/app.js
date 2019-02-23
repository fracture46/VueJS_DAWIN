var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

if (process.env.NODE_ENV === "development") {
    const open = require('opn');
}

global.Movies = [
    {
        title: "L'étrange noël de M. Jack",
        year: 1994,
        language: "English",
        genre: "Fantasy/Musical",
        director: {
            name: "Henry Selick",
            nationality: "American",
            birthdate: "30/11/1952"
        },
        rate : [1, 5, 4],
        poster: {
            file: `L'étrange noël de mr Jack.jpg`
        }
    },
    {
        title: "Interstellar",
        year: 2014,
        language: "English",
        genre: "Drama/Riddle movie",
        director: {
            name: "Christopher Nolan",
            nationality: "Britain/American",
            birthdate: "30/07/1970"
        },
        rate : [3, 2, 5],
        poster: {
            file: `interstellar.jpg`
        }
    }
];

var app = express();
app.use(express.static(path.resolve('src/static')));
app.use(express.static(path.resolve('src/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var port = process.env.PORT || 3000;

app.listen(port, () => console.log('App listening on port '+port))

var expressRouter = require('./routes.js');
app.use('/api', expressRouter);

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + port);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve('src/dist/index.html'))
})

if (process.env.NODE_ENV === "development") {
    open(`http://localhost:${port}`).catch(() => {
      log.warn(`Failed to open browser automatically.`);
    });
}