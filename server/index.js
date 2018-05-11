const express = require('express');
const route = require('./routes/routes');

const PORT = "5500";
const APP = express();

APP.use('/api',route);

//database
const Mongodb = require('./dbconfig');

APP.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`);
});