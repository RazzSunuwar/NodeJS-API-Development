const express = require("express");
const app = express();
const port = process.env.PORT || 3005;

app.get('/', (req, res) => {
    res.send("Hello World from NODEJS")
  }
);

app.listen(port, (err, done) => {
    if(err){
      console.log(`Error listening at port ${port}`);
    } return console.log(`Success listening at port ${port}`)
  }
);
