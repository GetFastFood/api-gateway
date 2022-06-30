const router = require('express').Router();
const axios = require('axios');
const handlerArticle = require('../utils/handler.Article');
const handlerOrder = require('../utils/handler.Order');
const { checkTokenMiddleware } = require('../middleware/auth');
const tokenReceiver = require('../utils/tokenReceiver');

router.get('/', checkTokenMiddleware, function(req, res) {
    axios.get(`${handlerOrder()}`).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

// GET /api/v1/order/:id
router.get('/:id', checkTokenMiddleware, function(req, res) {
    axios.get(`${handlerOrder()}` + req.params.id).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

// GET /api/v1/order/client/:id
router.get('/client/:id', checkTokenMiddleware, function(req, res) {
    axios.get(`${handlerOrder()}` +`client/`+ req.params.id).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

// GET /api/v1/order/delivery/:id
router.get('/delivery/:id', checkTokenMiddleware, function(req, res) {
    axios.get(`${handlerOrder()}` +`delivery/`+ req.params.id).then(function(response){
        res.json(response.data);
        return response.data;
    }).catch(function(err){
        console.log(err);
        res.status(500).json({ message: 'Error. Internal server error' });
    });
});

// GET /api/v1/order/restaurant/:id
router.get('/restaurant/:id', checkTokenMiddleware, async (req, res) => {

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
router.post('/', checkTokenMiddleware, function(req, res) {
    const tokenLoad = tokenReceiver(req);

    if(tokenLoad.role === 'role_technique' || tokenLoad.role === 'role_restaurateur' || tokenLoad.role === 'role_commercial' || tokenLoad.role === 'role_client'){
       req.app.notifications(req);
        axios.post(`${handlerOrder()}`, req.body).then(function(response){
            res.json(response.data);
            return response.data;
        }).catch(function(err){
            console.log(err);
            res.status(500).json({ message: 'Error. Internal server error' });
        });
    }else{
        res.status(403).json({ message: 'Error. Forbidden' });
    }
});

// PUT /api/v1/order
router.put('/:id', checkTokenMiddleware, async(req, res) =>{
    const tokenLoad = tokenReceiver(req);

    if(tokenLoad.role === 'role_technique' || tokenLoad.role === 'role_restaurateur' || tokenLoad.role === 'role_commercial' || tokenLoad.role === 'role_livreur' 
    || tokenLoad.role === 'role_client'){
        axios.put(`${handlerOrder()}` + req.params.id, req.body).then(function(response){
            res.json(response.data);
            return response.data;
        }).catch(function(err){
            console.log(err);
            res.status(500).json({ message: 'Error. Internal server error' });
        });

        const orderPromise = axios.get(`${handlerOrder()}` + req.params.id);
        const orderResponse = await orderPromise;
        const orderJson = await orderResponse.data;

        if(orderJson.delivery == null){
            orderJson.delivery = req.body.delivery;
        }

        orderJson.status = req.body.status;

        req.app.notificationsUpdate(orderJson);

    }else{
        res.status(403).json({ message: 'Error. Forbidden' });
    }
});

module.exports = router;