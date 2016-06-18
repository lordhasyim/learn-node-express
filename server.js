
// Base Setup
// ====================
// call the package we need

var express = require("express"); 	//call express
var app = express(); 				//define our app using express
var bodyParser = require("body-parser");

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cobamongo');

var router = require('./router');


//configure app to use body parser
// this will let us get to data from a POST

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; //set our port

//ROUTE OUR API
//=====================



// REGISTER OUR ROUTES --------------------------
// all of our routes will be prefixed  with /api
app.use('/api', router);

//START SERVER
app.listen(port);
console.log('magic happen at port : ' + port);