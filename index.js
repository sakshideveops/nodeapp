var express = require('express');
 
var app = express();//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
<<<<<<< HEAD
 res.send('hello world');
=======
 res.send('hello world');
>>>>>>> 84ed444d5da2ebdcc193b27b4e1d0baa3946eb6c
});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
