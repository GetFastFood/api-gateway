const router = require('express').Router();
const axios = require('axios');
const jwt = require('jsonwebtoken');
const handlerMenu = require('../utils/handler.Menu');

// GET /api/v1/menu
router.get('/', function(req, res) {
    axios.get(`${handlerMenu()}`).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

// GET /api/v1/menu/:id
router.get('/:id', function(req, res) {
    axios.get(`${handlerMenu()}` + req.params.id).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

// POST /api/v1/menu
router.post('/', function(req, res) {
    axios.post(`${handlerMenu()}`, req.body).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

// PUT /api/v1/menu
router.put('/:id', function(req, res) {
    axios.put(`${handlerMenu()}` + req.params.id, req.body).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

// DELETE /api/v1/menu/:id
router.delete('/:id', function(req, res) {
    axios.delete(`${handlerMenu()}` + req.params.id).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

module.exports = router;