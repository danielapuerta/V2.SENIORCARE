
module.exports = function (app){
   //login
   app.get('/', function(req, res){
      res.render('login');
   });

   
};