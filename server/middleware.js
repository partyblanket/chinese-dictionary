const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets')

const checkToken = (req, res, next) => {
    const token = req.headers['x-access-token']
  
    if (token) {
      jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
          return res.json({
            error: 'Token is not valid'
          });
        } else {
          req.userid = decoded.id;
          next();
        }
      });
    } else {
      return res.json({
        error: 'Auth token is not supplied'
      });
    }
  };

  module.exports = { checkToken }