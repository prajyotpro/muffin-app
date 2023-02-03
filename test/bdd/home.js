process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

let server = require('../../dist/index');

chai.use(chaiHttp);

describe("Home", () => {

    after(function () {
        process.exit();
    });
    
    describe('/GET home', () => {
        it('it should GET "GET request to the homepage" in response', (done) => {
              chai.request('http://localhost:3001')
              .get('/v1/home')
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.eql("GET request to the homepage");
                    done();
              })
        });
    });
});