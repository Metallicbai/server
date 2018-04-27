const mongoose = require('./db');
const Schema = mongoose.Schema;


class Database {
    // 创建 Schema
    createSchema(options = {}) {
        return new Schema(options);
    }

    // 获取 model 模型
    getModel(name = '',schema) {
        if(!name) {
            throw ('model name is required');
        }

        if(schema) {
            return mongoose.model(name,schema);
        } else {
            return mongoose.model(name);
        }

    }
}

module.exports = Database;