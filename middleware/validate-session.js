const jwt = require('jsonwebtoken');
const User = require('../db').import('../models/user');

const validateSession = (req, res, next) => {
    console.log("********************** inside validateSession******************")
    const token = req.headers.authorization;
    /* Do a CORS preflight check. If the server sends back a "OPTIONS" method, move forward to verify. OPTIONS isn't a valid method in our headers.js */
    if (req.method === "OPTIONS") {
        console.log("**************** req.method === OPTIONS *************")
        next()
    } else {
        console.log("***************** getting ready to jwt.verify(token,... **************")
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (!err && decoded) {
                User.findOne({
                    where: {
                        id: decoded.id
                    }
                }, console.log(decoded))
                    .then(user => {
                        if (!user) throw 'err'
                        req.user = user
                        return next()
                    })
                    .catch(err => next(err))
            } else {
                console.log("error from jwt.verify: ", err, "decoded = ", decoded)
                req.errors = err;
                return res.status(500).send('Not authorized')
            }
        })
    }
}

module.exports = validateSession;