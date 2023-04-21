import { controller, httpGet } from "inversify-express-utils";
import { BaseController } from "../Core/BaseController";


@controller('/home')
export class HomeController extends BaseController {
    constructor() {
        super();
    }
    
    @httpGet('/')
    async index() {
        return "Welcome to muffin app.";
    }
}
