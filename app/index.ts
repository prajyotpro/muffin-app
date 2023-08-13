import 'dotenv/config';
import * as bodyParser from "body-parser";
import { InversifyExpressServer } from "inversify-express-utils";

import container from "@/ioc/inversify-container";

import '@/controller/greeting';

export async function Bootstrap() {

    const port = 3000;

    const server = new InversifyExpressServer(container);

    const app = server
        .setConfig((app: any) => {
            app.use(
                bodyParser.urlencoded({
                    extended: true,
                })
            );
            app.use(bodyParser.json());
        })
        .build();
    app.listen(port, () => console.log(`⚡️[server]: Server is running at http://localhost:${port}`));
}

Bootstrap();