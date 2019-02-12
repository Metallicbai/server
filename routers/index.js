const Router = require('koa-router');

const router = new Router();
const home = require('./home');
const login = require('./login');


router.use('/',home.routes(),home.allowedMethods());

router.use('/login',login.routes(),home.allowedMethods());


module.exports = router;