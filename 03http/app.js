//Importa o módulo http
var http = require('http');

//Cria o servidor
http.createServer(function(req, res){
    res.write('Hello World!');
    res.end();
}).listen(8080);