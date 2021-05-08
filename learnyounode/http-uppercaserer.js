const http = require('http');
const port = process.argv[2];

const server = http.createServer((req, res) => {
    if (req.method != 'POST') res.end('Send a POST request')
    req.on("data", (chunk) => {
        res.write(chunk.toString().toUpperCase(), (err) => {
            if (err) console.log(err)
        })
    })

    req.on("end", () => {
        res.end()
    })
})

server.on("connection", () => console.log("received connection from remote"));


console.log(`listening on port ${port}`)
server.listen(port);