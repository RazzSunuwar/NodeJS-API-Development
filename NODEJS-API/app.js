const express = require("express");
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3005;
const morgan = require("morgan");

// bring in postRoutes
const postRoutes = require('./routes/post');

// const myOwnMiddlere = (req, res, next) => {
//   console.log("Middleware applied");
//   next();
// }


// Middleware
app.use(morgan("dev"));
// app.get('/', postRoutes.getPosts);
// app.use(myOwnMiddlere);

app.use('/', postRoutes);

app.listen(port, (err, done) => {
    if(err){
      console.log(`Error listening at port ${port}`);
    } return console.log(`Success listening at port ${port}`)
  }
);
