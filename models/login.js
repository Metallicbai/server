const db = require('../db');

const Schema = db.Schema;

const Login = new Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createTime: {
        type: Date,
        default: Date.now()
    },
    updateTime: {
        type: Date,
        default: Date.now()
    }
})


const login = db.model('Login',Login);


module.exports = login;