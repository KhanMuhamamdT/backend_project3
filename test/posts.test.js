const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
const api = supertest('http://localhost:8080');

describe("GET /api/posts", function () {
    it("should return a 200 response", function (done) {
        api
            .get("/api/posts")
            .set("Accept", "application/json")
            .expect(200, done)
    })

    it("Should return an array of posts that have a field called 'title'", function(done){
            api
                .get("/api/posts")
                .set("Accept", "application/json")
                .end(function(error, response){
                    expect(response.body[0]).to.have.property('title');
                    done()
        })
    })
})

describe('POST /api/posts', function() {
    before(function(done) {
        api.post('/api/posts')
        .set('Accept', 'application/json')
        .send({
            "url": "https://static.techspot.com/images2/news/bigimage/2019/01/2019-01-14-image-6.jpg",
            "title": "egg",
            "info": "may i offer you an egg in this trying time",
        })
        .end(done)
    })

    it("should add a post to the collection and return it", function (done) {
        api.get("/api/posts")
            .set("Accept", "application/json")
            .end(function(error, response) {
                expect(response.body.length).to.greaterThan(2);
                done()
            })
    })
})

describe('PUT /api/posts/', function() {
    before(function(done) {
        api.post('/api/posts/5e334eb9c7683f25edc0045d')
        .set('Accept', 'application/json')
        .send({
            "url": "https://static.techspot.com/images2/news/bigimage/2019/01/2019-01-14-image-6.jpg",
            "title": "egg 2 baby",
            "info": "that's right the eggciting sequel to egg",
        })
        .end(done)
    })

    it("should edit a post and return it", function (done) {
        api.get("/api/posts/5e334eb9c7683f25edc0045d")
            .set("Accept", "application/json")
            .end(function(error, response) {
                expect(response.body[0].title).to.equal("egg 2 baby");
                done()
            })
    })
})

