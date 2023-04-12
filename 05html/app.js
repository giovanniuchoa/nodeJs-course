//importar o express
var express = require('express');

//app
var app = express();

//especificar local do css e da imagem
app.use(express.static(__dirname + '/publico'));

//rotas
app.get('/', function(req, res){
    res.sendFile(__dirname + '/pagina.html');
})

//servidor
app.listen(8080);