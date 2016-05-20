var express = require('express');
var app = express();
var fs = require("fs");

app.get('/fhir/dstu2/patient/*', function (req, res) {
   fs.readFile( "data/patient.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
});

app.get('/fhir/dstu2/allergy/*', function (req, res) {
   fs.readFile( "data/allergy.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
});

var server = app.listen(8102, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Server listening at http://%s:%s", host, port)

})
