const express = require('express');
const app = express();
const workerRoute = require('./api/routes/worker');
const mongoose = require('mongoose');
const bodyparser = require ('body-parser');
const userRoute = require('./api/routes/user')

mongoose.connect('mongodb+srv://sbs:Shrikant143@sbs.65zg60g.mongodb.net/');



app.use (bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use('/worker',workerRoute);
app.use('/user',userRoute);




module.exports = app;