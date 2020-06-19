const express = require("express");
const app = express();
const port = process.env.PORT || 3005;

// bring in postRoutes
const postRoutes = require('./routes/post');

app.get('/', postRoutes.getPosts);

app.listen(port, (err, done) => {
    if(err){
      console.log(`Error listening at port ${port}`);
    } return console.log(`Success listening at port ${port}`)
  }
);
