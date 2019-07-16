const { searchMany } = require('../mongoose/actions/word')
const { registerUser} = require('../mongoose/actions/user')

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
    console.log(req.body);
    
    const newUserObject = {
        email: req.body.email,
        password: req.body.password
    };
    
    try{
        const result = await registerUser(newUserObject)
        console.log(result);
        res.json({ok: true})
    }catch(err){
        console.log(err)
        res.json({ok: false})
    }

})

module.exports = api;