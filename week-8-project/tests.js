
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");


let chai = require('chai');
let chaiHttp = require('chai-http');

let should = chai.should();

chai.use(chaiHttp);


describe('/Post snippet', () => {
    it('it should create a snippet', (done) => {
      chai.request(server)
          .post('/api/createSnippet')
          .end((err, res) => {
              res.should.have.status(200);
              // res.body.length.should.be.eql(0);
            done();
          });
    });
});

describe('/GET snippets', () => {
    it('it should GET all snippets', (done) => {
      chai.request(server)
          .get('/api/allSnippets')
          .end((err, res) => {
              res.should.have.status(200);
              // res.body.length.should.be.eql(0);
            done();
          });
    });
});

describe('/GET snippets', () => {
    it('it should GET snippets by language', (done) => {
      chai.request(server)
          .get('/api/snippetByLanguage/Java')
          .end((err, res) => {
              res.should.have.status(200);
              // res.body.length.should.be.eql(0);
            done();
          });
    });
});

describe('/GET snippets', () => {
    it('it should GET snippets by tag', (done) => {
      chai.request(server)
          .get('/api/snippetByTag/myTag')
          .end((err, res) => {
              res.should.have.status(200);

            done();
          });
    });
});

describe('/GET snippets', () => {
    it('it should GET a snippet by id', (done) => {
      chai.request(server)
          .get('/api/viewSnippet/1')
          .end((err, res) => {
              res.should.have.status(200);

            done();
          });
    });
});
