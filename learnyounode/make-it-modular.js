const mymodule = require('./mymodule');

[a,b, folder, extension] = process.argv;

mymodule(folder, extension, (err, data) => {
    if(err) console.log(err);
    data.forEach(item => console.log(item));
})