const router = require('express').Router();
const axios = require('axios');
const jwt = require('jsonwebtoken');
const handlerUser = require('../utils/handler.User');

// GET /api/v1/users
router.get('/', function(req, res) {
    axios.get(`${handlerUser()}`).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

// GET /api/v1/users/:id
router.get('/:id', function(req, res) {
    axios.get(`${handlerUser()}` + req.params.id).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

// POST /api/v1/users/
router.post('/', function(req, res) {
    axios.post(`${handlerUser()}`, req.body).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

// PUT /api/v1/users/:id
router.put('/:id', function(req, res) {
    axios.put(`${handlerUser()}` + req.params.id, req.body).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

// DELETE /api/v1/users/:id
router.delete('/:id', function(req, res) {
    axios.delete(`${handlerUser()}` + req.params.id).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });

});

module.exports = router;