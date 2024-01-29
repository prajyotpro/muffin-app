import { controller, httpGet, interfaces, request, response } from "inversify-express-utils";
import Types from "../ioc/types";
import { GetGreetingUseCase } from "@/usecase/getGreetingUseCase";
import { inject } from "inversify";
import { sendSuccessResponse } from "@/core/common/response";
import { Response } from "express";
import { BaseController } from "@/core/controller/base";
import { LoggerMiddleware } from "app/middleware/logger";


@controller('/welcome')
export class HomeController extends BaseController implements interfaces.Controller {

    constructor(
        @inject(Types.UseCase.GetGreetingUseCase) private getGreetingUseCase: GetGreetingUseCase,
    ) {
        super();
    }

    @httpGet('/', LoggerMiddleware)
    async index(
        @response() res: Response,
    ) {
        const result = await this.getGreetingUseCase.execute();
        return sendSuccessResponse(res, this.httpStatus.OK, result);
    }
}
