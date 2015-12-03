var Wunderground = require('wunderground-api');
var client = new Wunderground('d8483e016960a875', '10035');

 
client.conditions('', function(err, data) {
  if (err) throw err;
  else console.log(data);
});