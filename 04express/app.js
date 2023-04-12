//Importar o express
var express = require('express');

//Criando variavel para acessar as funcionalidades do express
var app = express();

//Rota
app.get('/', function(req, res){
    res.write('Utilizando o express');
    res.end();
})

//Servidor
app.listen(8080);