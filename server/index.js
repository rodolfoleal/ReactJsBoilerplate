const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');


//Set Db
mongoose.connect('mongodb://localhost:auth/auth')

//App setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);


//Server setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on " + port);