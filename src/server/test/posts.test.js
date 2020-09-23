const test = require('ava');
const request = require('supertest');
const router = require('../routes/posts');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

test('should pass', (t) => {
    t.pass();
});

test.cb('should retrieve valid Posts Api', (t) => {
  
    chai.request(router)
    .get('/api/posts')
    .then(function (res) {
        expect(res).to.have.status(200);
        expect('Content-Type', /json/);
     });
    // .expect('Content-Type', /json/)
    // .expect(200)
    // .end(function (err, res) {
    //     t.falsy(err, 'should not have error')
    //     t.end()
    // });

});
