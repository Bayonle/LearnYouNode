const fs = require('fs')
const path = require('path')

module.exports = function(folder, extension, callback){
    fs.readdir(folder, (err, data) => {
        if(err) return callback(err);

        var filteredList = data.filter(fileName => path.extname(fileName) === '.'+extension);
        callback(null, filteredList);
    })
}