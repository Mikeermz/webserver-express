 const http = require('http');

http.createServer( (req,res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  const salida = {
    nombre: 'Mikee Rmz',
    apellido: 'Ramirez',
    edad: 29
  }
  res.write( JSON.stringify(salida));
  // res.write('Hola Mundo');
  res.end();
}).listen(8081)

console.log('Listen in port 8080');
