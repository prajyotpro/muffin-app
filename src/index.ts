import 'dotenv/config';
import 'reflect-metadata';

import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';

import './Controller/HomeController';

export async function Bootstrap() {

    const port = process.env.PORT;
    
    const container = new Container();
    const server = new InversifyExpressServer(container);

    const app = server.build();
    app.listen(port, () => console.log(`⚡️[server]: Server is running at http://localhost:${port}`));
}

Bootstrap();