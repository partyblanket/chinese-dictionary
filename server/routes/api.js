const { searchMany } = require('../mongoose/actions/word')
const { registerUser, getUser} = require('../mongoose/actions/user')
const { sign } = require('../jwt');
const { hashPassword, checkPassword } = require('../bcrypt');

const api = require('express').Router({mergeParams: true});

api.get('/search/:searchTerms', async (req, res) => {
    try{
        const result = await searchMany(req.params.searchTerms)
        res.json(result);
    }catch(err){
        console.log(err);
    }
});

api.get('/', (req,res) => {
    res.json({ok: true});
});

api.post('/register', async (req, res) => {
    const {email, password} = req.body
    try{
        const hashedPassword = await hashPassword(password)
        const result = await registerUser(email, hashedPassword)
        const token = await sign({email})
        console.log(result);
        res.json({token, email})
    }catch(err){
        console.log(err)
        res.json(err)
    }

})

api.post('/login', async (req, res) => {
    const {email, password} = req.body
    try{
        const user = await getUser(email)
        const passwordMatch = await checkPassword(password, user.password)
        const token = await sign({email})
        if(passwordMatch) {
            res.json({token, email})
        }else {
            res.json({error: 'password does not match'})
        }
    }catch(err){
        console.log(err)
        res.json(err)
    }

})

module.exports = api;