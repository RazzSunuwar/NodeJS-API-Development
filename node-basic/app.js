const { sum } = require('./helpers');
const http = require('http');
const port = 5000;
const server = http.createServer((req, res) =>{
    console.log("Request url>>>", req.url);
    res.send('Hello World');
    res.end();
});
server.listen(port, (err, done) => {
    if(err){
        console.log(`Error on server listening at port ${port}`);
    } return console.log(`Success on server listening at port ${port}`);
})
let total = sum(10, 20);
console.log("Total:", total);    //Total: 30

console.log("Hello World! This is the first NodeJS File in this repository.");
