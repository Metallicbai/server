const koa = require('koa');
const path = require('path');


const app = new koa();
const static = require('koa-static');
const bodyParser = require('koa-bodyparser');
const router = require('./routers');
const views = require('koa-views');

// 启动 model
require('./models');

// 设置静态服务
app.use(static(path.join(__dirname,'./static'),{
    extensions: ['html']
}))

// 解析post请求
app.use(bodyParser());

// 设置路由
app.use(router.routes()).use(router.allowedMethods());





app.listen(3001,() => {
    console.log('服务开始执行 http://localhost:3001')
})
