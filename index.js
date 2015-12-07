var Wunderground = require('wunderground-api');
var client = new Wunderground('d8483e016960a875', '10035');

var express = require ('express');
var app = express();

// /forecast displays JSON data about the current forecast, pulled from Wunderground 
app.get('/forecast',function(req,res){
	client.conditions('', function(err, data) {
  if (err) throw err;
  else res.send(data);
});
	
});

app.listen(3000);
console.log('listening on port 3000');