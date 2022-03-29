import app from "../app";
import request from "supertest";

describe('#GET / tasks', () => {

    it('should get all tasks', (done) =>{
     request(app).get('/')
      .end((err, res) => {
       expect(res.statusCode).toEqual(200)
       done();
      });
    });

    it('should get error response', (done) => {
        request(app).get('/test2')
        .end((err, res) => {
        expect(res.statusCode).toEqual(404)
        done();
        });
    });

    it('should get error response2', (done) => {
        request(app).get('/test')
            .end((err, res) => {
            expect(res.body).toHaveProperty('test');
            expect(res.statusCode).toEqual(200);
            done();
        });
    });

});

