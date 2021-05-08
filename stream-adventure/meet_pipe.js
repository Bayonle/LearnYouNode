const fs = require('fs');

var fileStream = fs.createReadStream(process.argv[2])
fileStream.pipe(process.stdout)
