### Getting Started

#### Language
We love Node.js, to keep your code of high-quality and best effecient in maintainence, we have opted TypeScript as the main programming language.

#### Prerequisites
Please make sure that Node.js (version >= 16) is installed on your operating system.

#### Setup
Well we do not have CLI as yet, but something we can eventually look forward TO DO.
```
$ git clone https://github.com/prajyotpro/muffin-app.git <project-name>
$ cd <project-name>

$ npm install
```

The project-name directory will be created, node modules and a few other boilerplate files will be installed, and a `app/` directory will be created and populated with several core folder and files.

```
app/
    controller/
        greeting.ts
    core/
        httpStatus.ts
        result.ts
    ioc/
        container.ts
        types.ts
    usecase/
        getGreetingUseCase.ts
    service/
    utils/
test/
    unit/
        usecase/
            getGreetingUseCase.test.ts
        service/
        utils/
    spec/
        controller/
            greeting.test.ts
```


### TEST
#### BDD
Mocha BDD

You should be able to write BDD tests in `test/integration` directory.

Invoke test `npm run unit:integration`

#### Unit

You should be able to write Unit tests in `test/unit` directory.

Invoke test `npm run test:test`
