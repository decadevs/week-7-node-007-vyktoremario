const request = require('supertest');
const app = require('../bin/www');



describe('GET /fetchRecords', () => {
    it('respond with json containing a list of all shapes calculations', (done) => {
        request(app)
            .get('/fetchRecords')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('POST /calculate', () => {
    it('respond with 201 created', (done) => {
        const data = {
            "shape": "rectangle",
            "dimension": {
                "a": 10,
                "b": 20
            }
        }
        request(app)
            .post('/calculate')
            .set('Accept', 'application/json')
            .send(data)
            .expect('Content-Type', /json/)
            .expect(201, done);
    });

    it('respond with 400 Bad Request for incomplete dimension for a triangle', (done) => {
        const data = {
            "shape": "triangle",
            "dimension": {
                "a": 10,
                "b": 20
            }
        }
        request(app)
            .post('/calculate')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect('"The length of the three sides are required"')
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

    it('respond with 400 Bad Request for incomplete dimension for a circle', (done) => {
        const data = {
            "shape": "circle"
        }
        request(app)
            .post('/calculate')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect('"\\"dimension\\" is required"')
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

    it('respond with 400 Bad Request for incomplete dimension for a square', (done) => {
        const data = {
            "shape": "square",
            "dimension": '10A'
        }
        request(app)
            .post('/calculate')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect('"\\"dimension\\" must be a number"')
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

    it('respond with 400 Bad Request for incomplete dimension for a rectangle', (done) => {
        const data = {
            "shape": "rectangle",
            "dimension": {
                "a": 10,
            }
        }
        request(app)
            .post('/calculate')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect('"\\"dimension.b\\" is required"')
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});