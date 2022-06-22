const router = require('express').Router();
const axios = require('axios');
const jwt = require('jsonwebtoken');
const { checkTokenMiddleware, extractBearerToken } = require('../middleware/auth');
const handlerArticle = require('../utils/handler.Article');
const handlerMenu = require('../utils/handler.Menu');
const handlerRestaurant = require('../utils/handler.Restaurant');


router.get('/restaurant/:id', async(req, res) => {

    try{
        const menuArray = [];
        const articleArray = [];

        const restaurantPromise = axios.get(`${handlerRestaurant()}` + req.params.id);
    
        const restaurantResponse = await restaurantPromise;
        const restaurantJson = await restaurantResponse.data;
    
        for (let i = 0; i < restaurantResponse.data.menus.length; i++) {
            const menuId = restaurantResponse.data.menus[i]._id;
            const menuPromise = axios.get(`${handlerMenu()}` + menuId);
    
            const menuResponse = await menuPromise;
            const menuJson = await menuResponse.data;
    
            menuArray.push(menuJson);
        };
    
        for(let i = 0; i < restaurantResponse.data.article.length; i++){
            const articleId = restaurantResponse.data.article[i]._id;
            const articlePromise = axios.get(`${handlerArticle()}` + articleId);
            const articleResponse = await articlePromise;
            const articleJson = await articleResponse.data;
    
            articleArray.push(articleJson);
        };
    
        res.json({restaurant: restaurantJson, menu: menuArray, article: articleArray});

    }catch(err){
        console.log(err);
    }

});

// GET /api/v1/restaurant
router.get('/restaurant', /*checkTokenMiddleware,*/ function(req, res) {
    // Récupération du token
    // const token = req.headers.authorization && extractBearerToken(req.headers.authorization)
    // Décodage du token
    //const decoded = jwt.decode(token, { complete: false })
    //console.log(decoded);

    axios.get(`${handlerRestaurant()}`).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
    });
});

// POST /api/v1/restaurant
router.post('/restaurant', function(req, res) {
    axios.post(`${handlerRestaurant()}`, req.body).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
    });
});

// PUT /api/v1/restaurant/:id
router.put('/restaurant/:id', function(req, res) {
    axios.put(`${handlerRestaurant()}`+ req.params.id, req.body).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
    });
});

// DELETE /api/v1/restaurant/:id
router.delete('/restaurant/:id', function(req, res) {
    axios.delete(`${handlerRestaurant()}`+ req.params.id).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
    });
});

module.exports = router;