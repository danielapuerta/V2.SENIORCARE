//to verify a SignUp (register) action, we need the following function: checkDuplicateNurseCode()
// check if nurseCode is duplicated or not

const db = require("../models");
const User = db.user;

checkDuplicateNurseCode = (req, res, next) => {
    //nurseCode
    User.findOne({
        where: {
            nurseCode: req.body.nurseCode
        }
    }).then(user => {
        if(user){
            res.status(400).send({
                message: "Failed! nurseCode is already in use!"
            });
            return;
        }
        next();
    });
}

const verifySignUp = {
    checkDuplicateNurseCode : checkDuplicateNurseCode
};

module.exports = verifySignUp;