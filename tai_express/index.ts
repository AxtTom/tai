import * as http from 'http';
import express from 'express';

(async () => {
    const app = express()
    .disable('x-powered-by')
    .use(express.json());
    const server = http.createServer(app);

    app.use('/', express.static(`${__dirname}/../vue_tai/dist`));

    
})();