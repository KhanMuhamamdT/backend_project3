const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
const api = supertest('http://localhost:8080');

describe("GET /api/comments", function () {
    it("should return a 200 response", function (done) {
        api
            .get("/api/posts")
            .set("Accept", "application/json")
            .expect(200, done)
    })

    it("Should return an array of comments that have a field called 'body'", function(done){
            api
                .get("/api/comments")
                .set("Accept", "application/json")
                .end(function(error, response){
                    expect(response.body[0]).to.have.property('body');
                    done()
        })
    })
})

describe('POST /api/comments', function() {
    before(function(done) {
        api.post('/api/comments')
        .set('Accept', 'application/json')
        .send({
            "body" : "Great pic!",
            "users" : "5e334eb9c7683f25edc0045c",
            "posts": "5e334eb9c7683f25edc0045d"
        })
        .end(done)
    })

    it("should add a comment to the collection and return it", function (done) {
        api.get("/api/comments")
            .set("Accept", "application/json")
            .end(function(error, response) {
                expect(response.body.length).to.greaterThan(3);
                done()
            })
    })
})
