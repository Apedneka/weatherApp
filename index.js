var Wunderground = require('wunderground-api');
var client = new Wunderground('d8483e016960a875', 'San Fransisco');

var express = require ('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// /forecast displays JSON data about the current forecast, pulled from Wunderground 
app.get('/forecast',function(req,res){
	client.conditions('', function(err, data) {
  if (err) throw err;
  else res.send(data);
});
	
});

app.get('/test',function(req,res){
	res.render('index')
});


app.listen(3000);
console.log('listening on port 3000');