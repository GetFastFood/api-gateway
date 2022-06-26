const router = require('express').Router();
const axios = require('axios');
const jwt = require('jsonwebtoken');
const handlerMenu = require('../utils/handler.Menu');
const handlerRestaurant = require('../utils/handler.Restaurant');

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

// GET /api/v1/menu/restaurant/:id
router.get('/restaurant/:id', function(req, res) {
    axios.get(`${handlerMenu()}` +`restaurant/`+ req.params.id).then(function(response){
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
        updateRestaurantForMenu(response.data.restaurantId, response.data._id);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

async function updateRestaurantForMenu(id, menuId){
    const arrayMenuId = [];
    const restaurantPromise = axios.get(`${handlerRestaurant()}` + id);
    const restaurantResponse = await restaurantPromise;
    const restaurantJson = await restaurantResponse.data;

    for(let i = 0; i < restaurantJson.menus.length; i++){
        arrayMenuId.push({_id : restaurantJson.menus[i]._id});
    }
    arrayMenuId.push({_id : menuId});

    axios.put(`${handlerRestaurant()}` + id, {menus: arrayMenuId}).then(function(response){
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
}
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
        deleteRestaurantForMenu(response.data.restaurantId, response.data._id);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

async function deleteRestaurantForMenu(id, menuId){
    const arrayMenuId = [];
    const restaurantPromise = axios.get(`${handlerRestaurant()}` + id);
    const restaurantResponse = await restaurantPromise;
    const restaurantJson = await restaurantResponse.data;

    for(let i = 0; i < restaurantJson.menus.length; i++){
        if(restaurantJson.menus[i]._id != menuId){
            arrayMenuId.push({_id : restaurantJson.menus[i]._id});
        }
    }

    arrayMenuId.slice(menuId, 1);

    axios.put(`${handlerRestaurant()}` + id, {menus: arrayMenuId}).then(function(response){
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
};

module.exports = router;