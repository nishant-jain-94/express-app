var http = require('http');
var express = require('express');
var app = express();

http.createServer(app).listen(3000,'0.0.0.0',function() {
  console.log("Express app started");
});

app.use(express.static('./public'));
// app.use(express.static('./files'));
// app.use(express.static('./downloads'));

//Setting the view engine as Jade
app.set('view engine','jade');
//Where to find the views
app.set('views','./views');

app.get('/',function(req,res) {
  res.render('index');
});

app.get('/say-hello',function(req,res) {
  res.render('hello');
});

app.get('/test',function(req,res) {
  res.send('This is a Test Page.');
})
// app.get('/',function(req,res) {
//   res.send('Welcome');
//   console.log("Served Some request..");
// });
