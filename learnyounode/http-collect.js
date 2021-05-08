const http = require('http');

const url = process.argv[2];

http.get(url, (res) => {
    res.setEncoding('utf8')
    let rawData = ''
    res.on('data', (chunk) => {rawData+=chunk});
    res.on('error', (err) => console.log(err))
    res.on('end', () => {
        console.log(rawData.length)
        console.log(rawData)
    })
}).on('error', console.error)