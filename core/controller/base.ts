import { injectable } from "inversify";
import { HttpStatus } from "@/core/common/httpStatus";

interface IBaseController {

}

@injectable()
export class BaseController {

    public httpStatus: typeof HttpStatus;

    constructor(
    ) {
        this.httpStatus = HttpStatus;
    }

    public Result() {

    }
}