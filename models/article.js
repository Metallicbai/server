const db = require('../db');

const schema = db.schema;

const Article = new schema({
    title: {
        type: String,
        required: true
    }
})

module.exports = db.model('article',Article);