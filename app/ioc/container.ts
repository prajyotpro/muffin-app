import "reflect-metadata";

import Types from "@/ioc/types";
import { Container } from "inversify";

import { GetGreetingUseCase, IGetGreetingUseCase } from "@/usecase/GetGreetingUseCase";

// import { IGreetingRepository } from "@/repository/igreeting";
// import { GreetingRepository } from "@/repository/greeting";

const container = new Container();

// Bindings
// container.bind<IGreetingRepository>(Types.Repository.App).to(GreetingRepository);
// container.bind<IGreetingModel>(Types.Model.Greeting).toConstantValue(Greeting);

container.bind<IGetGreetingUseCase>(Types.UseCase.GetGreetingUseCase).to(GetGreetingUseCase);

export default container;
