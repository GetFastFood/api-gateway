const router = require('express').Router();
const axios = require('axios');
const jwt = require('jsonwebtoken');
const { checkTokenMiddleware, extractBearerToken } = require('../middleware/auth');
const handlerUser = require('../utils/handler.User');

const users  = [];

router.post('/login', async (req, res) => {

    try {

    await verificationDb();

    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'Error. Please enter the correct email and password' })
    }

    const user = users.find(user => user.email === req.body.email && user.password === req.body.password);

    if (!user) {
        return res.status(400).json({ message: 'Error. Wrong email or password' })
    }

    const token = jwt.sign({
        id: user.ID,
        email: user.email,
        role: user.role
    }, process.env.SECRET_TOKEN, { expiresIn: '3 hours' })

    const refreshToken = jwt.sign({
        id: user.ID,
        email: user.email,
        role: user.role
    }, process.env.SECRET_REFRESH_TOKEN, { expiresIn: '7d'})

    return res.json({ access_token: token, refresh_token: refreshToken })

    } catch (error) {
        console.log(error);
        res.status(400).send("An error occured");
    }
});

router.get('/test', checkTokenMiddleware, (req, res) => {
    // Récupération du token
    const token = req.headers.authorization && extractBearerToken(req.headers.authorization)
    // Décodage du token
    const decoded = jwt.decode(token, { complete: false })

    return res.json({ content: decoded })
})

router.post("/register", async (req, res) => {
  try {
    // Aucune information à traiter
    if (!req.body.email || !req.body.password) {
      return res
        .status(400)
        .json({ message: "Error. Please enter username and password" });
    }

    await verificationDb();
    // Checking
    const userExisting = users.find((u) => u.email === req.body.email);

    // Pas bon
    if (userExisting) {
      return res
        .status(400)
        .json({ message: `Error. Email ${req.body.email} already existing` });
    }

    const bodyJson = JSON.stringify(req.body);
    console.log(bodyJson);
    // Insertion dans le tableau des utilisateurs
    axios.post(`${handlerUser()}`, req.body);
    return res.status(201).json({ message: `User ${req.body.email} created` });

  } catch (error) {
    console.log(error);
    res.status(400).send("An error occured");
  }
});

async function verificationDb(){
    const userPromise = axios.get(`${handlerUser()}`);
    const userResponse = await userPromise;
    const userJson = await userResponse.data;
    
    for(var i in userJson){
        users.push(userJson[i]);
    }

    return users;
}

module.exports = router;