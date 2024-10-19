require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port  = process.env.PORT || 8081;

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('Could not connect to MongoDB:', err));


app.get('/', (req, res) => {
  res.send({ message: 'Hello from Vercel!  this' });
});

app.listen(port, ()=>{
    console.log("listening at ", port)
})


// module.exports = app;
