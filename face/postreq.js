var fs = require('fs');

var body = fs.readFileSync('./lin.jpg').toString("base64");

console.log(body);




