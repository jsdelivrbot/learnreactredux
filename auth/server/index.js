// main starting point of app
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const app = express();
const mongoose = require('mongoose');
// db setup
mongoose.connect('mongodb://192.168.91.129:auth/auth');

// app setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*'}));
router(app);

// server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('server is listening on ', port);
