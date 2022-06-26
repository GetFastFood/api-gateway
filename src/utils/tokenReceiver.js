const jwt = require('jsonwebtoken');
const { extractBearerToken } = require('../middleware/auth');

function tokenReceiver(req) {
    // Récupération du token
    const token = req.headers.authorization && extractBearerToken(req.headers.authorization)
    // Décodage du token
    const decoded = jwt.decode(token, { complete: false })

    return decoded;
}

module.exports = tokenReceiver;