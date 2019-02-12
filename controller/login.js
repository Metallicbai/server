
const model = require('../models');

const crypto = require('crypto');

const tools = require('../utils');

// 密码加密处理
function handlePassword(newPassword,oldPassword) {
    let password = crypto.createHash('md5').update(newPassword).digest('hex');

    if(oldPassword) return password === oldPassword;

    return password;
}



module.exports = {
    /*
     *  注册
     */
    async sign(ctx,next) {
        console.log(ctx.request)

        let {name,password} = ctx.request.body;

        if(name === '' || password ==='') {
            return ctx.body = tools.sendResult(null,0, `name and password required`);
        }

        await model.login.create({
            userName: name,
            password: handlePassword(password)
        })
        ctx.body = tools.sendResult(null,0);
        // ctx.body = 'hello world'
    }
}