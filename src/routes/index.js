const router = require('express').Router();
const axios = require('axios');
const { checkTokenMiddleware } = require('../middleware/auth');
const handlerArticle = require('../utils/handler.Article');
const handlerMenu = require('../utils/handler.Menu');
const handlerRestaurant = require('../utils/handler.Restaurant');
const tokenReceiver = require('../utils/tokenReceiver');


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
router.get("/restaurant", function (req, res) {
  axios
    .get(`${handlerRestaurant()}`)
    .then(function (response) {
      res.json(response.data);
      return response.data;
    })
    .catch(function (err) {
      console.log(err);
    });
});

router.get('/restaurant/owner/:id', async (req, res) => {
    try{

        const menuArray = [];
        const articleArray = [];

        const restaurantPromise = axios.get(`${handlerRestaurant()}` +`owner/`+ req.params.id);
        const restaurantResponse = await restaurantPromise;
        const restaurantJson = await restaurantResponse.data[0];

        for (let i = 0; i < restaurantJson.menus.length; i++) {
            const menuId = restaurantJson.menus[i]._id;
            const menuPromise = axios.get(`${handlerMenu()}` + menuId);
    
            const menuResponse = await menuPromise;
            const menuJson = await menuResponse.data;
    
            menuArray.push(menuJson);
        };
    
        for(let i = 0; i < restaurantJson.article.length; i++){
            const articleId = restaurantJson.article[i]._id;
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

// POST /api/v1/restaurant
router.post('/restaurant', checkTokenMiddleware, function(req, res) {
    
    const tokenLoad = tokenReceiver(req);

    if(tokenLoad.role === 'role_technique' || tokenLoad.role === 'role_restaurateur' || tokenLoad.role === 'role_commercial'){
        axios.post(`${handlerRestaurant()}`, req.body).then(function(response){
            res.json(response.data);
            return response.data;
        }).catch(function(err){
            console.log(err);
        });
    }else{
        res.status(403).json({ message: 'Error. Forbidden' });
    }
});

// PUT /api/v1/restaurant/:id
router.put('/restaurant/:id', checkTokenMiddleware, function(req, res) {

    const tokenLoad = tokenReceiver(req);

    if(tokenLoad.role === 'role_technique' || tokenLoad.role === 'role_restaurateur' || tokenLoad.role === 'role_commercial'){
        axios.put(`${handlerRestaurant()}`+ req.params.id, req.body).then(function(response){
            res.json(response.data);
            return response.data;
        }).catch(function(err){
            console.log(err);
        });
    }else{
        res.status(403).json({ message: 'Error. Forbidden' });
    }
});

// DELETE /api/v1/restaurant/:id
router.delete('/restaurant/:id', checkTokenMiddleware, function(req, res) {
    const tokenLoad = tokenReceiver(req);

    if(tokenLoad.role === 'role_technique' || tokenLoad.role === 'role_restaurateur' || tokenLoad.role === 'role_commercial'){
        axios.delete(`${handlerRestaurant()}`+ req.params.id).then(function(response){
            res.json(response.data);
            return response.data;
        }).catch(function(err){
            console.log(err);
        });
    }else{
        res.status(403).json({ message: 'Error. Forbidden' });
    }
});

module.exports = router;