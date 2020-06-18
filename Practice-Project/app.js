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


const fs = require("fs");
const fileName = "target.txt";
fs.readFile(fileName, 'utf-8', (err, data) => {
  if(err) {
    console.log(err)
  }
  console.log(data)
});
