require('dotenv').config();

const express = require('express');
const app = express();

const port  = process.env.PORT || 8081;

app.get('/', (req, res) => {
  res.send({ message: 'Hello from Vercel!  this' });
});

app.listen(port, ()=>{
    console.log("listening at ", port)
})


// module.exports = app;
