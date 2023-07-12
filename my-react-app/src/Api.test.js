const request = require('supertest');
const app = 'http://localhost:3000';

describe('GET /api/users', () => {
  it('responds with status code 200', async () => {
    const response = await request(app).get('/api/users');
    expect(response.statusCode).toBe(200);
    
  });
});