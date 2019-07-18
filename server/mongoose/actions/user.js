const User = require('../models/user');

function registerUser (email, password) {   
    return new Promise((resolve, reject) => {
        const user = new User({email, password});
        user.save((err, doc) => {
            if(err) return reject({error: 'user already exists'})
            resolve(doc)
        })
    })

}

function getUser (email) {
    return new Promise((resolve, reject) => {
        User.findOne({email}, (err, user) => {
            if(err) {
                console.log(err);
                reject({error: 'mongoose error'})
            }else if(!user) {
                reject({error: 'user does not exist'})
            } else{
                resolve(user)
            }
        })
    })

}

module.exports = { registerUser, getUser }