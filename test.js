var fn = require('./index.js');

var obj = fn.query2json('https://segmentfault.com/t/javascript?type=newest&page=2');

console.log(obj);