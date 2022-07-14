import * as http from 'http';
import express from 'express';
import { MongoClient } from 'mongodb';

(async () => {
    console.log('Connecting to DB...');
    const mongo = new MongoClient('mongodb://localhost:27017')
    await mongo.connect();
    const db = mongo.db('tai');
    console.log('Connected to DB');

    const users = db.collection('users');
    const foodlist = db.collection('foodlist');

    const app = express()
    .disable('x-powered-by')
    .use(express.json());
    const server = http.createServer(app);

    app.use('/', express.static(`${__dirname}/../vue_tai/dist`));

    app.get('/api', async (req, res) => {
        res.send('Hallo Welt!');
        res.end();
    });

    server.listen(8999, 'localhost', () => {
        console.log('Server running!');
    });

    process.on('uncaughtException', (err) => {
        console.error(err);
    });
})();