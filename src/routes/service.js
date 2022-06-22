const router = require('express').Router();

// GET /api/v1/service/download
router.get('/download', function(req, res){
    const file = `./logs/server.log`;
    res.download(file); // Set disposition and send it.
});

module.exports = router;