const User = require('../models/user');

function registerUser (email, password) {   
    return new Promise((resolve, reject) => {
        const user = new User({email, password});
        user.save((err, user) => {
            console.log(err);
            
            if(err) return reject({error: 'user already exists'})
            resolve(user)
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

function changeCollection (userid, action, content) {
    return new Promise((resolve, reject) => {
        User.findById(userid, (err, user) => {
            if(err) return reject({error: 'cant find user'})
            console.log('UU',user);
            
            user.words.push(content)
            user.save((err) => {
                if(err) return reject({error: 'error adding document to array'})
                resolve()   
            })
            
        })
    })
}



module.exports = { registerUser, getUser, changeCollection }
