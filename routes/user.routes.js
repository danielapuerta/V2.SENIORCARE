const {authJwt} = require('../middleware');
const controller = require('../controllers/user.controller');



module.exports = function (app){
   //login
   app.get('/', function(req, res){
      //renders login view
      res.render('register');
   });
   app.get('/register', function(req, res){
      //renders register view
      res.render('register');
   })

   
};