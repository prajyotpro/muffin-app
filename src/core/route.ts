const fs = require('fs');

module.exports = function (app: any) {

    app.get("/", (req: Request, res: any) => {
        return res.send("Welcome to muffin api services.");
    });

    return fs.readdir('./dist/routes/', (err: any, files: any) => {

        return files.forEach((file: string) => {
            if (file.indexOf("index.js") < 0) {
                let originalRouterName = file.split(".js");
                let routerName = originalRouterName[0].split("-");

                if (routerName.length < 2) {
                    routerName[1] = routerName[0];
                    routerName[0] = "v1";
                }

                return app.use("/" + routerName[0] + "/" + routerName[1].toString() + "/", require("../routes/" + originalRouterName[0]));
            }
        });
    });
}