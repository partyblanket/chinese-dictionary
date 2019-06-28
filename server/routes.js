const routes = require('express').Router({mergeParams: true});

routes.get('/', (req,res) => {
    res.json({ok: true});
});

module.exports = routes;