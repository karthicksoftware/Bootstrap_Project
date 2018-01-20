// Require express and create an instance of it
var express = require('express');
//var bootstrap = require('bootstrap');
var app = express();

app.use(express.static('public'));


// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});



// start the server in the port 3000 !
app.listen(3000, function () {
    console.log('Karthick app listening on port 3000.');
});
