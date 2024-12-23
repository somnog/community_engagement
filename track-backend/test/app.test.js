const request = require('supertest');
const express = require('express');

const app = express();

// Sample /health endpoint for testing
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

describe('GET /health', () => {
    it('should respond with status 200 and OK message', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('OK');
    });
});