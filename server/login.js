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
     * 注册
     */
    async sign(userName,password) {
        try {

            // 检索数据库是否存在账号
            let total = await model.login.find({userName});

            if(total.length > 0) {
                return {
                    state: false,
                    message: 'user existence'
                }
            }

            let result =  await model.login.create({
                userName,
                password: handlePassword(password)
            })
            result.state = true;
            return {
                userName,
                createTime: new Date(result.createTime).toLocaleString()
            }
        } catch (error) {
            return {
                state: false,
                error: true
            }
        }
    }
}