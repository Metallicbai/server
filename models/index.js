const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/blog');

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));

db.on('open',cb => {
    console.log('连接成功')
})

module.exports = mongoose;