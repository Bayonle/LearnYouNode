const net = require('net')
const strftime = require('strftime')

const server = net.createServer(socket => {
    socket.end(strftime('%Y-%m-%d %H:%M') + '\n')
})

server.listen(Number(process.argv[2]));