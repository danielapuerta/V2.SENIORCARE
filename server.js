var express = require('Express');
var app = express();
var port = 3000;


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