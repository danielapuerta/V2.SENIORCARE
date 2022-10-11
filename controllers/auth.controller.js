const db = require("../models");
const config = require("../config/auth.config");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    //save user to database
    db.Users.create({
        nurseCode: req.body.nurseCode,
        password: bcrypt.hashSync(req.body.password, 8)
    });
    
};

exports.signin = (req, res) => {
    db.user.findOne({
        where: {
            nurseCode: req.body.nurseCode
        }
    }).then(user => {
        if(!user){
            return res.status(404).send({
                message : "User Not found!"});
        }
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if(!passwordIsValid){
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }
    })
}