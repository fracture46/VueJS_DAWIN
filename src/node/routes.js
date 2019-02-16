const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

var movies = [
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

app.use(bodyParser.json()) //parse JSON body
app.use(bodyParser.urlencoded()) //parse x-www-form-urlencoded body

app.use(express.static(path.resolve('src/static')));
app.use(express.static(path.resolve('src/dist')));
app.get('/', (req, res) => {
    res.sendFile(path.resolve('src/dist/index.html'))
})


app.get('/api/movies/all', (req, res) => res.send(movies))
app.get('/api/movies/:id', (req, res) => res.send(movies[req.params.id]))

app.post('/add', (req,res) => {
    console.log('Req time from object : '+req.date)
    res.send(`${parseInt(req.body['foo']) + parseInt(req.body['bar'])}`)
})
app.listen(3000, () => console.log('App listening on port 3000'))