const http = require('http');

function sitioWeb(req, res)
{
    res.writeHead  (200, {'Content-Type': 'text/html'});
    res.end("<h1> Server node JS </h1>");

}

let servidor = http.createServer(sitioWeb);

servidor.listen(9090, "localhost");

console.log("Servidor corriendo en http://localhost:9090");