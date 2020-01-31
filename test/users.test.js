const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
const api = supertest('http://localhost:8080');


//users api test
describe("GET /api/users", function () {
    it("should return a 200 response", function (done) {
        api
            .get("/api/users")
            .set("Accept", "application/json")
            .expect(200, done)
    })

    it("Should return an array of users that have a field called 'name'", function(done){
            api
                .get("/api/users")
                .set("Accept", "application/json")
                .end(function(error, response){
                    expect(response.body[0]).to.have.property('name');
                    done()
        })
    })
})

describe('POST /api/users', function() {
    before(function(done) {
        api.post('/api/users')
        .set('Accept', 'application/json')
        .send({
            "userID": "testuser",
            "name": "tester testington", 
            "description": "Hi I like to test things",
            "prfilePicURL": "https://pbs.twimg.com/profile_images/789124598751113216/b_LsWJhW_400x400.jpg",
        })
        .end(done)
    })

    it("should add a user to the collection and return it", function (done) {
        api.get("/api/users")
            .set("Accept", "application/json")
            .end(function(error, response) {
                expect(response.body.length).to.equal(2);
                done()
            })
    })
})

let userID = ''

//still isn't working, i don't think it's logging userid right, and no records are getting deleted.
describe('DELETE /api/users/testuser', ()  => {
    before(function(done) {
        api.get('/api/users/')
            .set('Accept', 'application/json')
            .end(function(error, response) {
                userID = response.body[1]._id
            })
            done()
    })
    before(function(done) {
        api.delete(`/api/users/testuser/${userID}`)
            .set('Accept', 'application/json')
            .end(done)
    })
    it("should delete testuser from the list of users", (done) => {
        api.get("/api/users")
            .set('Accept', 'application/json')
            .end(function(error, response){
                expect(response.body.length).to.equal(1);
                done()
            })
            done
    })
})
