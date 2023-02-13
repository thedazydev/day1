var http = require('http');

var host = '127.0.0.1';
var port = 3000;

var server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    console.log('Server Working')
    response.end('Server Working Success')
})

server.listen(port, host, (error) => {
    if (error) {
        return console.log('Error Occured: ', error)
    }

    console.log('Server is listening on ' + host + ':' + port)
})
