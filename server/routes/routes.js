const express = require('express');
const Router = express.Router();

Router.get('/hello',(req,res)=>{
    res.send('from route');
});

module.exports = Router;