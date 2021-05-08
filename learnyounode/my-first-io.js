const fs = require('fs');

[a,b,c] = process.argv;
const fileContent = fs.readFileSync(c).toString() //or pass utf8 as second arguement to feadFileSync instead of toString
const numberOfNewLines = fileContent.split("\n").length - 1
console.log(numberOfNewLines)
