import { inject, injectable } from "inversify";
import { Result, successResult } from "core/common/result";

export interface IGetGreetingUseCase {
    execute(): Promise<Result<string>>;
}

@injectable()
export class GetGreetingUseCase implements IGetGreetingUseCase {
    constructor(
    ) {
        // no-op
    }

    async execute(): Promise<Result<string>> {
        return successResult("Welcome to muffin app!");
    }
}
