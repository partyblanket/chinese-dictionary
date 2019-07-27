const { searchMany } = require('../mongoose/actions/word')
const { registerUser, findUser, addRemoveCollection, addRemoveWordsUser, getData } = require('../mongoose/actions/user')
const { sign } = require('../jwt');
const { hashPassword, checkPassword } = require('../bcrypt');
const { checkToken } = require('../middleware')

const api = require('express').Router({mergeParams: true});

api.get('/search/:searchTerms', async (req, res) => {
    try{
        const result = await searchMany(req.params.searchTerms)
        res.json(result);
    }catch(err){
        console.log(err);
    }
});


api.post('/register', async (req, res) => {
    const {email, password} = req.body
    try{
        const hashedPassword = await hashPassword(password)
        const user = await registerUser(email, hashedPassword)
        const token = await sign({email, id: user._id})
        res.json({token, email})
    }catch(err){
        console.log(err)
        res.json(err)
    }

})

api.post('/login', async (req, res) => {
    const {email, password} = req.body
    try{
        const user = await findUser(email)
        const passwordMatch = await checkPassword(password, user.password)
        const token = await sign({email, id: user._id})
        if(passwordMatch) {
            res.json({token, email: user.email, collections: user.collections, words: user.words})
        }else {
            res.json({error: 'password does not match'})
        }
    }catch(err){
        console.log(err)
        res.json(err)
    }

})

api.get('/data', checkToken, async (req, res) => {
    const userid = req.userid
    try{
        const {email, collections, words} = await getData(userid)
        res.json({email, collections, words})
    }catch(err){
        console.log(err)
        res.json(err)
    }

})

api.post('/update', checkToken, async (req, res) => {
    const {action, payload} = req.body
    const userid = req.userid
    console.log(userid, action, payload);
    
    try{
        if(action === 'add_collection'){
            await addRemoveCollection(userid, action, payload)
        }else if(action === 'save_word'){
            await addRemoveWordsUser(userid, action, payload)
        }else{
            console.log('action not recognised: ',action);
            return res.json({err: 'wrong action paramater'})
        }
        
        res.json({ok: 'yes'})
    }catch(err){
        console.log(err)
        res.json(err)
    }

})

module.exports = api;