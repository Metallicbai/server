const router = require('koa-router')();
const controller = require('../controller/index');
router.get('/',controller)


module.exports = router;