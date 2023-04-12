//Express
var express = require('express');

//Bodyparser
var bodyParser = require('body-parser');

//App
var app = express();

//Config bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Rotas
app.get('/', function(req, res){
    res.sendFile(__dirname + '/formulario.html');
});

app.post('/receber', function(req, res){
    res.write('O nome informado é ' + req.body.nome);
    res.end();
})

//Servidor
app.listen(8080);