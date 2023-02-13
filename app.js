const express  = require('express');

const routes = require('./routes/routes');
const app = express();

// Watch for incomding requires of method get
// to the route http://localhost:4001/api



routes(app);



module.exports = app;








