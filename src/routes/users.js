const router = require('express').Router();
const axios = require('axios');
const { checkTokenMiddleware } = require('../middleware/auth');
const { encrypt } = require('../utils/aesEncryption');
const handlerUser = require('../utils/handler.User');
const { deleteUserArray } = require('./auth');

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
    const passwordEncrypt = encrypt(req.body.password,"YFpoGQ@$VrUMf64tZ9eg^RiaQSZ^Pw%*");
    req.body.password = passwordEncrypt;
    axios.post(`${handlerUser()}`, req.body).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

// PUT /api/v1/users/:id
router.put('/:id', checkTokenMiddleware, function(req, res) {
    deleteUserArray(req.params.id);
    const passwordEncrypt = encrypt(req.body.password,"YFpoGQ@$VrUMf64tZ9eg^RiaQSZ^Pw%*");
    req.body.password = passwordEncrypt;

    axios.put(`${handlerUser()}` + req.params.id, req.body).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

// PUT /api/v1/users/recovery/:id
router.put('/recovery/:id', function(req, res) {
    deleteUserArray(req.params.id);
    const passwordEncrypt = encrypt(req.body.password,"YFpoGQ@$VrUMf64tZ9eg^RiaQSZ^Pw%*");
    req.body.password = passwordEncrypt;

    axios.put(`${handlerUser()}` + req.params.id, req.body).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

// DELETE /api/v1/users/:id
router.delete('/:id', checkTokenMiddleware, function(req, res) {
    deleteUserArray(req.params.id);
    
    axios.delete(`${handlerUser()}` + req.params.id).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });

});

// GET /api/v1/users/email/:email
router.get('/email/:email', function(req, res) {

    axios.get(`${handlerUser()}`+`email/` + req.params.email).then(function(response){
        res.json(response.data);
        return response.data;
    }  ).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });

});

module.exports = router;