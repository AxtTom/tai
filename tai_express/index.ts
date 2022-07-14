import * as http from 'http';
import express from 'express';
import { MongoClient } from 'mongodb';
import { UserApi } from './api/user';

(async () => {
    console.log('Connecting to DB...');
    const mongo = new MongoClient('mongodb://localhost:27017')
    await mongo.connect();
    const db = mongo.db('tai');
    console.log('Connected to DB');

    global.users = db.collection('users');
    global.foodlist = db.collection('foodlist');

    const app = express()
    .disable('x-powered-by')
    .use(express.json());
    const server = http.createServer(app);

    app.use('/', express.static(`${__dirname}/../vue_tai/dist`));

    UserApi(app);

    server.listen(8999, 'localhost', () => {
        console.log('Server running!');
    });

    process.on('uncaughtException', (err) => {
        console.error(err);
    });
})();