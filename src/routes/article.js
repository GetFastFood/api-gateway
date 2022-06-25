const router = require('express').Router();
const axios = require('axios');
const jwt = require('jsonwebtoken');
const handlerArticle = require('../utils/handler.Article');

// GET /api/v1/article
router.get('/', function(req, res) {
    axios.get(`${handlerArticle()}`).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

// GET /api/v1/article/:id
router.get('/:id', function(req, res) {
    axios.get(`${handlerArticle()}` + req.params.id).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

// GET /api/v1/article/restaurant/:id
router.get('/restaurant/:id', function(req, res) {
    axios.get(`${handlerArticle()}` +`restaurant/`+ req.params.id).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

// POST /api/v1/article
router.post('/', function(req, res) {
    axios.post(`${handlerArticle()}`, req.body).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

// PUT /api/v1/article
router.put('/:id', function(req, res) {
    axios.put(`${handlerArticle()}` + req.params.id, req.body).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

// DELETE /api/v1/article/:id
router.delete('/:id', function(req, res) {
    axios.delete(`${handlerArticle()}` + req.params.id).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });

});

module.exports = router;