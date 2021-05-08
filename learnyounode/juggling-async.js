const http = require('http');

const [x, y, ...urls] = process.argv;

[...urls].forEach(url => {
    http.get(url, res => {
        res.setEncoding('utf8')
        let rawData = ''
        res.on('data', (data) => {rawData+=data});
        res.on('error', (err) => console.log(err))
        res.on('end', () => {console.log(rawData)})
    }).on('error', console.error)
})
