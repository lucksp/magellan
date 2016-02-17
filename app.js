// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Routes \\

app.get('/', function(req, res){
  res.sendFile('index.html', { root : './' })
});

app.get('/next', function(req, res){
	res.sendFile(req.query.location + '.html', { root : './' })
});

app.get('/obj', function(req, res){
	var returnData = {
		location: req.query.location,
		nextlocation: req.param('location')
	}

	res.send(returnData)
});


// app.get('/seville.html',function(req, res) {
// 	res.sendFile('seville.html', { root : './' })
// })

// app.get('/canary.html',function(req, res) {
// 	res.sendFile('canary.html', { root : './' })
// })

// app.get('/verde.html',function(req, res) {
// 	res.sendFile('verde.html', { root : './' })
// })

// app.get('/magellan.html',function(req, res) {
// 	res.sendFile('magellan.html', { root : './' })
// })

// app.get('/guam.html',function(req, res) {
// 	res.sendFile('guam.html', { root : './' })
// })

// app.get('/philippines.html',function(req, res) {
// 	res.sendFile('philippines.html', { root : './' })
// })

// INVALID LOCATION MESSAGE
app.get('/:invalid', function(req, res){
	res.send('Sorry, magellan did not travel here.')
})

// Creating Server and Listening for Connections \\
var port = 3030
app.listen(port, function(){
  console.log('Server running on port ' + port);

})