const http = require('http');
var strftime = require('strftime')
const port = process.argv[2];

const server = http.createServer((req, res) => {
    const urlObj = new URL(req.url, "http://example.com");
    if(urlObj.pathname === '/api/parsetime') {
        const dateobj = new Date(Date.parse(urlObj.searchParams.get('iso')))
        res.end(JSON.stringify({
            "hour": Number(strftime('%H', dateobj)),
            "minute": Number(strftime('%M', dateobj)),
            "second": Number(strftime('%S', dateobj))
        }))
    }

    if(urlObj.pathname === '/api/unixtime'){
        res.end(JSON.stringify({
            "unixtime": Number(Date.parse(urlObj.searchParams.get('iso'))),
        }))
    }
    res.writeHead(200, {"content-type": "application/json"})
})

server.on("connection", () => console.log("received connection from remote"));


console.log(`listening on port ${port}`)
server.listen(port);