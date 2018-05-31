var fs = require('fs');

fs.readFile('abc.txt', function (err, data) {
  if (err) {
    return console.error(err);
  }
    console.log("Asynchronous read:" + data.toString());
});

var data = fs.readFileSync('abc.txt');
console.log("Synchronous read:" + data.toString());
console.log("Program Ended");




var a = new Promise((resolve,reject) => {
fs.readFile('abc.txt', (err, data) => {
if(err) {
  reject(err);
}
else
resolve('Hi');
});
});
a.then(data => console.log(data)).catch(err=> console.log(err))
