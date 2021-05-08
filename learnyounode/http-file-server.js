const http = require('http');
const fs = require('fs')

console.log(process.argv)
var server = http.createServer((request, response) => {
    var stream = fs.createReadStream(process.argv[3])
    
    response.on('open', ()=> stream.pipe(response));
    // response.on('error', (err) => response.end(err))
})

server.listen(process.argv[2]);