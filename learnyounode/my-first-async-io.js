const fs = require ('fs');

[a,b,c] = process.argv;
fs.readFile(c, 'utf8', (err, data) => {
    if(err) throw err;
    const newLines = data.split("\n").length -1;
    console.log(newLines);
})
