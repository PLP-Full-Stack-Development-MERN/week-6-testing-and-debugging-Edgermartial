const request = require('supertest');
const app = require('../server'); // Import your Express app

describe('Bug Tracker API', () => {
    it('should create a new bug', async () => {
        const res = await request(app).post('/bugs').send({
            title: "Test Bug",
            description: "This is a test bug",
            status: "open"
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.title).toBe("Test Bug");
    });

    it('should fetch all bugs', async () => {
        const res = await request(app).get('/bugs');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
