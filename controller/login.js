
const model = require('../models');

const tools = require('../utils');

const server = require('../server');

module.exports = {
    /*
     *  注册
     */
    async sign(ctx,next) {

        let {name,password} = ctx.request.body;

        // 检测入参
        if(!name) {
            return ctx.body = tools.sendResult(null,4001, `name is required`);
        }
        if(!password) {
            return ctx.body = tools.sendResult(null,4001, `password is required`);
        }

        
        let result = await server.login.sign(name,password);


        if(result.state) {
            ctx.body = tools.sendResult(result,0);
        } else {
            ctx.body = tools.sendResult(null,500,result.message)
        }
    }
}