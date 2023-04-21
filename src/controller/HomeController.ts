import { Request, Response } from "express";
import { BaseController } from "../core/BaseController";

export class HomeController extends BaseController {

    static index(req:Request, res:Response) {
        return res.json('GET request to the homepage')
    }
}
