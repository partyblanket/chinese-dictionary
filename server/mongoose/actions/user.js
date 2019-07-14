const User = require('../models/user');

function registerUser (userObject) {
    console.log(userObject);
    
    return new Promise((resolve, reject) => {
        const user = new User(userObject);
        user.save((err, doc) => {
            if(err) reject(err)
            resolve(doc)
        })
    })

}

module.exports = { registerUser }