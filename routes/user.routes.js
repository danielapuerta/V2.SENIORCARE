
module.exports = function (app){
   //login
   app.get('/', function(req, res){
      res.render('login');
   });
   app.post('/', (req, res) => {
      // Insert Login Code Here
      let nurseCode = req.body.nurseCode;
      let password = req.body.password;
      res.send(`nurseCode: ${nurseCode} password: ${password}`);
    });

   
};