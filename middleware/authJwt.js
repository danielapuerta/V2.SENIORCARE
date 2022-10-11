/*To process Authentification & Authorisation, we have these functions:
*check if token is provided, legal or not. We get token from x-access-token of HTTP heades
the we use jsonwebtoken's verify() function 
* check if roles of user contains required role or not*/

const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");//secret key
const db = require("../models");
const User = db.user;

verifyToken = (req, res, next) => {
    console.log("Starting Verify Token");
    let token = req.headers["x-access-token"] || req.cookies['x-access-token'];
  
    if (!token) {
      return res.status(403).send({
        message: "No token provided!"
      });
    }
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
          return res.status(401).send({
            message: "Unauthorized!"
          });
        }
        req.userId = decoded.id;
        next();
    });
};

const authJwt = {
    verifyToken : verifyToken
}

module.exports = authJwt;


