### Server Status
For local development monitoring. Simple, self-hosted module based on Socket.io and Chart.js to report realtime server metrics for Express-based node servers.

Run server and go to `/status`

### TEST
#### BDD
Mocha BDD

You should be able to write BDD tests in `test/bdd` directory.

Invoke test `npm run bdd-test`

#### Unit

You should be able to write Unit tests in `test/unit` directory.

Invoke test `npm run unit-test`


### Versioning
Routes are pre-configured to serve API endpoint based on versioning.
By default all the endpoints will be functional on V1 endpoint.
You can create a new route in `src/routes` directory.

For example `src/home` route will be served by default at `/v1/home`

If in future you wish to move the API to version 2, from the code base then you can simple create a new router file in `routes` directory with name `v2-home.ts` 

This route will be served on `/v2/home`

### Controller
