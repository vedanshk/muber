const express  = require('express');

const app = express();

// Watch for incomding requires of method get
// to the route http://localhost:4001/api

app.get('/api' , (req , res)=>{

    res.send({hi:'there'});



});



module.exports = app;








