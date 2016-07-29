var express = require('express');

//Create app
var app = express();

app.use(express.static('public'));

app.listen(3000, function(){
  console.log('Express is up on port 3000');
});
