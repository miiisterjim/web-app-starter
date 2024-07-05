import request from 'supertest';
import app from '../server';

describe('GET /hello world', () => {
  
  it(`should return 'Hello World!'`, async () => {
    
    const response = await request(app).get(`/hello-world`);
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('content', 'Hello');
  });
  
});