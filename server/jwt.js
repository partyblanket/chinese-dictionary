const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets')

const sign = (objectToInclude) => {
    const token = jwt.sign(objectToInclude,
        JWT_SECRET,
        { expiresIn: '24h' }
      );
    return token
}

module.exports = { sign }