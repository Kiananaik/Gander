const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

require('dotenv/config'); //THIS IS SO WE CAN KEEP SOME INFORMATIO PRIVATE.

//MORE AND MORE MIDDLEWARE
app.use(bodyParser.json());

//IMPORT ROUTES
const postsRoute = require('./routes/posts');
// const userRoute = require('./routes/user');
console.log('routes?');

app.use('/posts', postsRoute);
// app.use('/user', userRoute);


console.log('is it app.use?');

// MIDDLEWARES
app.use('/posts', () => {
    console.log('This is a middleware running');
});
console.log('middleware?');



//YOU HAVE THE ABILITY TO CREATE ROUTES

//ROUTES

app.get('/', (req, res) => {
    res.send('We are on home');
});



//CONNECT TO DB HERE

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },
    () => console.log('Connected to DB!')
);

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://<username>:<password>@gander-pfhfi.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


//How do we start listening?

app.listen(3000, () => {
    console.log('Im listening you twat.');
});



// module.exports = app;