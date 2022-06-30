const router = require('express').Router();
const axios = require('axios');
const jwt = require('jsonwebtoken');
const { checkTokenMiddleware, extractBearerToken } = require('../middleware/auth');
const { encrypt, decrypt } = require('../utils/aesEncryption');
const handlerUser = require('../utils/handler.User');
const handlerRestaurant = require('../utils/handler.Restaurant');
const logs = require('../utils/logs.utils');

const users  = [];

router.post('/login', async (req, res) => {

    try {
    console.log(users)

    await verificationDb();


    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'Error. Please enter the correct email and password' })
    }

    const user = users.find(user => user.email === req.body.email)

    if(!user){
        return res.status(400).json({ message: 'User is not present or delete !' })
    }

    const decryptpassword = decrypt(user.password, "YFpoGQ@$VrUMf64tZ9eg^RiaQSZ^Pw%*");

    if (!user || decryptpassword !== req.body.password) {
        logs.info("User : " + req.body.email + " tried to connect from " + req.ip);
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

    logs.info('User : ' + req.body.email + ' connected, from IP : ' + req.ip + ' with role: ' + user.role);
    return res.json({ access_token: token, refresh_token: refreshToken, role: user.role, id: user.ID, email: user.email });

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
    
    const encryptPassword = await encrypt(req.body.password, "YFpoGQ@$VrUMf64tZ9eg^RiaQSZ^Pw%*");
    req.body.password = encryptPassword;
    const bodyJson = JSON.stringify(req.body);
    console.log(bodyJson);
    // Insertion dans le tableau des utilisateurs
    axios.post(`${handlerUser()}`, req.body).then((response) => {
        axios.get(`${handlerUser()}`);
        
        if(req.body.role == "role_restaurateur"){
            addRestaurateur(req);
         }

    }).catch((error) => {
        console.log(error);
    });

    return res.status(201).json({ message: `User ${req.body.email} created` });

  } catch (error) {
    console.log(error);
    res.status(400).send("An error occured");
  }
});

async function addRestaurateur(req){
    const userResponse = await axios.get(`${handlerUser()}`);
    const userJson = await userResponse.data;
    const user = userJson.find((u) => u.email === req.body.email);
    const json = {"owner" : user.ID, "status": "false", "name": "Nom de votre restaurant", "image": "URL de votre image",
    "opening": "00:00", "closing": "00:00", "address": "Adresse de votre restaurant"};

    axios.post(`${handlerRestaurant()}`, json);
}

async function verificationDb(){
    const userPromise = axios.get(`${handlerUser()}`);
    const userResponse = await userPromise;
    const userJson = await userResponse.data;
    
    for(var i in userJson){
        users.push(userJson[i]);
    }

    return users;
}

function deleteUserArray(){
    users.splice(0, users.length);
    console.log(users);
}

module.exports = router;
module.exports.deleteUserArray = deleteUserArray;