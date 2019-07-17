const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets')

const sign = (username) => {
    const token = jwt.sign({username: username},
        JWT_SECRET,
        { expiresIn: '24h' }
      );
    return token
}

module.exports = { sign }

jwt.verify(sign('hi'),JWT_SECRET,(err, doc) => {console.log(doc)})