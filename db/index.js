const mongoose = require('mongoose');
const {database} = require('../config/config');

mongoose.connect(`mongodb://${database.host}/${database.database}`);

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));

db.on('open',cb => {
    console.log('连接成功')
})

module.exports = mongoose;