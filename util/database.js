const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = collback => {
    MongoClient.connect('mongodb+srv://nodemongodb:nodemongodb@nodemongo.ha7jdwu.mongodb.net/?retryWrites=true&w=majority')
        .then(client => {
            _db = client.db('userdata');
            collback();
        })
        .catch(err => {
        console.log(err);
        throw err;
    })
}

const getDb = () => {
    if (_db) {
        return _db;
    } else {
        throw 'DataBase Not Found!!!';
    }
}

module.exports = {
    mongoConnect: mongoConnect,
    getDb: getDb
}