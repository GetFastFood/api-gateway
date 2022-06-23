const router = require('express').Router();
const axios = require('axios');
const jwt = require('jsonwebtoken');
const handlerArticle = require('../utils/handler.Article');
const handlerOrder = require('../utils/handler.Order');

// GET /api/v1/order
router.get('/', function(req, res) {
    axios.get(`${handlerOrder()}`).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

// GET /api/v1/order/:id
router.get('/:id', function(req, res) {
    axios.get(`${handlerOrder()}` + req.params.id).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

// GET /api/v1/order/client/:id
router.get('/client/:id', function(req, res) {
    axios.get(`${handlerOrder()}` +`client/`+ req.params.id).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

// GET /api/v1/order/delivery/:id
router.get('/delivery/:id', function(req, res) {
    axios.get(`${handlerOrder()}` +`delivery/`+ req.params.id).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

// GET /api/v1/order/restaurant/:id
router.get('/restaurant/:id', async (req, res) => {

    try{
        const articleArray = [];
        const restaurantOrderArray = [];

        const orderRestaurantPromise = axios.get(`${handlerOrder()}` +`restaurant/`+ req.params.id);
        const orderRestaurantResponse = await orderRestaurantPromise;
        const restaurantJson = await orderRestaurantResponse.data;
        restaurantOrderArray.push(restaurantJson);

        for(let i = 0; i < restaurantJson.length; i++){
            for(let j = 0; j < restaurantJson[i].article.length; j++){
                const created = restaurantJson[i].created;
                const articlePromise = axios.get(`${handlerArticle()}` + restaurantJson[i].article[j]._id);
                const articleResponse = await articlePromise;
                const articleJson = await articleResponse.data;
                articleJson.created = created;
                articleArray.push(articleJson);
            }
        }
        
        res.json({restaurant: restaurantJson, article: articleArray});

    }catch(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    }
});

// POST /api/v1/order
router.post('/', function(req, res) {
    axios.post(`${handlerOrder()}`, req.body).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

// PUT /api/v1/order
router.put('/:id', function(req, res) {
    axios.put(`${handlerOrder()}` + req.params.id, req.body).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

module.exports = router;