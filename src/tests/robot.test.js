const request = require('supertest');
const app = require('../build/server');

describe('Robot Service Test cases', function () {
    it('Should Throw error when body is not passed or empty', async () => {
        const mockRequestObject = {};
        const res = await request(app).post('/api/robot').send(mockRequestObject);
        const jsonResponse = JSON.parse(res.text);
        expect(jsonResponse.code).toEqual(400);
        expect(jsonResponse.body).toHaveProperty('error');
        expect(jsonResponse.body.error).toEqual('Invalid request, Please change the request and try again');
    }, 50000);

    it('Should operate robot', async () => {
        const mockRequestObject = {
            direction: 'Left',
            step: 10
        };
        const res = await request(app).post('/api/robot').send(mockRequestObject);
        const jsonResponse = JSON.parse(res.text);
        expect(jsonResponse.code).toEqual(200);
        expect(jsonResponse.body).toHaveProperty('response');
        expect(jsonResponse.body.response).toHaveProperty('currentPosition');
        expect(jsonResponse.body.response).toHaveProperty('direction');
        expect(jsonResponse.body.response).toHaveProperty('operationTime');
        expect(jsonResponse.body.response).toHaveProperty('previousPosition');
    }, 50000);

    it('Should operate robot', async () => {
        const mockRequestObject = {
            direction: 'Left',
            step: 10
        };
        const res = await request(app).post('/api/robot').send(mockRequestObject);
        const jsonResponse = JSON.parse(res.text);
        expect(jsonResponse.code).toEqual(200);
        expect(jsonResponse.body).toHaveProperty('response');
        expect(jsonResponse.body.response).toHaveProperty('currentPosition');
        expect(jsonResponse.body.response).toHaveProperty('direction');
        expect(jsonResponse.body.response).toHaveProperty('operationTime');
        expect(jsonResponse.body.response).toHaveProperty('previousPosition');
    }, 50000);
    it('Should operate robot', async () => {
        const mockRequestObject = {
            direction: 'Left',
            step: 10
        };
        const res = await request(app).post('/api/robot').send(mockRequestObject);
        const jsonResponse = JSON.parse(res.text);
        expect(jsonResponse.code).toEqual(200);
        expect(jsonResponse.body).toHaveProperty('response');
        expect(jsonResponse.body.response).toHaveProperty('currentPosition');
        expect(jsonResponse.body.response).toHaveProperty('direction');
        expect(jsonResponse.body.response).toHaveProperty('operationTime');
        expect(jsonResponse.body.response).toHaveProperty('previousPosition');
    }, 50000);
    it('Should operate robot', async () => {
        const mockRequestObject = {
            direction: 'Left',
            step: 10
        };
        const res = await request(app).post('/api/robot').send(mockRequestObject);
        const jsonResponse = JSON.parse(res.text);
        expect(jsonResponse.code).toEqual(200);
        expect(jsonResponse.body).toHaveProperty('response');
        expect(jsonResponse.body.response).toHaveProperty('currentPosition');
        expect(jsonResponse.body.response).toHaveProperty('direction');
        expect(jsonResponse.body.response).toHaveProperty('operationTime');
        expect(jsonResponse.body.response).toHaveProperty('previousPosition');
    }, 50000);

    it('Should get Latest Location of robot', async () => {
        const res = await request(app).get('/api/robot');
        const jsonResponse = JSON.parse(res.text);
        expect(jsonResponse.code).toEqual(200);
        expect(res).toHaveProperty('body');
        expect(jsonResponse.body.x).toEqual(-40);
        expect(jsonResponse.body.y).toEqual(0);
    }, 50000);
});
