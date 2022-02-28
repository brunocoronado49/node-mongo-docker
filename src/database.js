import mongo from 'mongoose';

mongo.connect('mongodb://mongo/mydatabasedocker')
    .then(db => console.log("database connected in: ", db.connection.host))
    .catch(error => console.log(error));