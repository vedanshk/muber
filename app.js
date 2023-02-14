const express  = require('express');

const routes = require('./routes/routes');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
// Watch for incomding requires of method get
// to the route http://localhost:4001/api

mongoose.Promise = global.Promise;

if(process.env.NODE_ENV !== 'test'){
    mongoose.connect('mongodb://localhost:37017/muber');
}

app.use(bodyParser.json());


routes(app);

app.use((err , req , res , next)=>{
    res.status(422).send({error: err.message});

});


module.exports = app;








