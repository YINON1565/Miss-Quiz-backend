// const logger = require('../services/logger.service')
async function requireAuth(req, res, next) {
    console.log(req.session.user, 'req.session.user');
    if (!req.session || !req.session.user) {
        res.status(401).end('Unauthorized!');
        return;
    }
    next();
}

async function requireAdmin(req, res, next) {
    if (!req.session.user.isAdmin) {
        res.status(403).end('Unauthorized Enough..');
        return;
    }
    next();
}

module.exports = {
    requireAuth,
    requireAdmin
}