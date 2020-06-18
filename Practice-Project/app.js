// const express = require("express");
// const port = process.env.PORT || 3001;
// const app = express();
// app.get('/', (req,res) => {
//   res.send("Hello World");
// })
// app.listen(port, (err, done) => {
//   if(err){
//     console.log(`Error on listening server at port ${port}`);
//   } return console.log(`Success on listening server at port ${port}`);
// });

// Asynchronous programming

const fs = require("fs");
const fileName = "target.txt";
// fs.readFile(fileName, 'utf-8', (err, data) => {
//   if(err) {
//     console.log(err)
//   }
//   console.log(data)
// });
// console.log("NodeJS is async programming...");



// Synchronous programming

const data = fs.readFileSync(fileName, 'utf-8');
console.log(data);
console.log("NodeJS is sync programming...");
