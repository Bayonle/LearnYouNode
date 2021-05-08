[a,b,...rest] = process.argv; 
//process.argv yields an array that contains the command line.
//first two arguments are node and the executing path

const sum = [...rest].reduce((prev, next) => +prev + +next);

console.log(sum)