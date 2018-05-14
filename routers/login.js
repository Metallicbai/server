const router = require('koa-router')();
const controller = require('../controller/login');
router.post('/sign',controller)


module.exports = router;