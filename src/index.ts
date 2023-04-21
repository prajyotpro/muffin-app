import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
const bodyParser = require('body-parser');

dotenv.config();


const cluster = require('cluster');
if (cluster.isMaster) {
    cluster.fork();

    cluster.on('exit', function () {
        cluster.fork();
    });
}

if (cluster.isWorker) {

    const app: Express = express();
    const port = process.env.PORT;

    if (process.env.ENVIRONMENT == "dev") {
        app.use(require('express-status-monitor')());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    require('./core/route')(app)

    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
}