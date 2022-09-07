var express = require('Express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
var port = 3000;

//To parse URL encoded data
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded());

//To parse json data
app.use(bodyParser.json());

//cookie-parser
app.use(cookieParser());

app.get('/dani', function(req, res){
    res.send("Hello World!");
 });

app.get('/:id', function(req,res){
    res.send('The id you specified is ' + req.params.id);
});


//routes
//this is my route for user
require('./routes/user')(app);



app.listen(port, () => console.log(`app listening on port ${port}!`));