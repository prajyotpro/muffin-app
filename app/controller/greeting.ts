import { controller, httpGet, interfaces, request, response } from "inversify-express-utils";
import Types from "../ioc/types";
import { GetGreetingUseCase } from "@/usecase/GetGreetingUseCase";
import { inject } from "inversify";
import { HttpStatus } from "@/core/common/httpStatus";
import { sendSuccessResponse } from "@/utils/response";
import { Request, Response } from "express";


@controller('/home')
export class HomeController implements interfaces.Controller {
    constructor(
        @inject(Types.UseCase.GetGreetingUseCase) private getGreetingUseCase: GetGreetingUseCase,
    ) {
        //
    }

    @httpGet('/')
    async index(
        @response() res: Response,
    ) {
        const result = this.getGreetingUseCase.execute();
        return sendSuccessResponse(res, HttpStatus.OK, result);
    }
}
