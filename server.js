//Express is for building the Rest apis
var express = require('Express');
//helps to parse the request and create the req.body object
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
var port = 3000;
const db = require('./models/index.js');
const exphbs = require('express-handlebars');
const cors = require("cors");

var corsOptions = {
    origin: "http://localhost:8081"
  };
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

//To parse URL encoded data
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded());

//cookie-parser
app.use(cookieParser());

//View files
app.engine('handlebars', exphbs.engine({
    layoutsDir: __dirname + '/views/layouts',
   partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'handlebars');


//routes
//this is my route for user
require('./routes/user.routes')(app);



app.listen(port, () => console.log(`app listening on port ${port}!`));