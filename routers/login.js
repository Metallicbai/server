const router = require('koa-router')();
const controller = require('../controller/login');
router.post('/sign',controller.sign)


module.exports = router;