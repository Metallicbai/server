
const model = require('../models');

module.exports = async ctx => {
    await model.findUser('login');
    ctx.body = 'hello world'
}