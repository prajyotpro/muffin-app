import { Request, Response } from "express";
import { Controller } from "../core/controller";

export class HomeController extends Controller {

    static index(req:Request, res:Response) {
        return res.json('GET request to the homepage')
    }
}
