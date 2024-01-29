import { BaseMiddleware } from "inversify-express-utils";
import { injectable } from "inversify";
import { Request, Response, NextFunction } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

@injectable()
export class LoggerMiddleware extends BaseMiddleware {

    handler(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): void {

        console.log("Request", {
            "method": req.method,
            "url": req.path,
            "params": req.params,
            "query": req.query,
            // "body": JSON.stringify(req.body),
        })
        next();
    }
}