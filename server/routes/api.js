const { searchMany } = require('../mongoose/actions/word')

const api = require('express').Router({mergeParams: true});

api.get('/:searchTerms', async (req,res) => {
    const result = await searchMany(req.params.searchTerms)
    res.json(result);
});

api.get('/', (req,res) => {
    res.json({ok: true});
});

module.exports = api;