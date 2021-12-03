const { MongoClient } = require('mongodb');

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

let db = null;

const getConnection = () => (db
    ? Promise.resolve(db)
    : MongoClient.connect('mongodb://localhost/mural-depoimentos', OPTIONS)
    .then((conn) => {
    db = conn.db('mural-depoimento');
    return db;
    }));

module.exports = { getConnection };