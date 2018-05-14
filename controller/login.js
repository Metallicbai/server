
const model = require('../models');

module.exports = async ctx => {
    console.log(ctx.request)

    let {name,password} = ctx.request.body;

    if(name === '' || password ==='') {
        return ctx.body = `name or password required`;
    }

    await model.login.create({
        userName: name,
        password
    })
    ctx.body = {
        message: '成功'
    }
    // ctx.body = 'hello world'
}