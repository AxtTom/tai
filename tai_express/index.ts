import * as http from 'http';
import express from 'express';

(async () => {
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