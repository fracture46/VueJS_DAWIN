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
        synopsys: "Jack Skellington, un épouvantail squelettique surnommé « le Roi des citrouilles » (Pumpkin King en version originale), vit dans la ville d'Halloween. En tant que maître de l'épouvante, Jack occupe ses journées à préparer la prochaine fête d'Halloween."
    },
    {
        title: "Interstellar",
        year: 2014,
        synopsys: "Alors que la Terre se meurt, une équipe d'astronautes franchit un trou de ver apparu près de Saturne conduisant à une autre galaxie, cela dans le but d'explorer un nouveau système stellaire et l'espoir de trouver une nouvelle planète habitable par l'humanité afin de la sauver."
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