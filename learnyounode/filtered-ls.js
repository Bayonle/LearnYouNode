const fs = require('fs');
const path = require('path');

[a, b, folderPath, fileExtension] = process.argv;

fs.readdir(folderPath, (err, fileNames) => {
    if (err) console.log(err)

    fileNames
    .filter(fileName => path.extname(fileName) === '.'+fileExtension)
    .forEach(fileName => console.log(fileName));
})