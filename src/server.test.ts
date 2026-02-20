import { describe, expect, it } from '@jest/globals';
import request from 'supertest';
import app from './server.js';

describe('Testes do servidor', () => {
    it('deve retornar status 200 na rota /health', async () => {
        const response = await request(app)
            .get('/health')
            .set('Accept', 'application/json');
        expect(response.status).toBe(200);
        expect(response.body.status).toBe('ok');
    });

    it('deve retornar a mensagem de boas-vindas na rota /api/welcome', async () => {
        const response = await request(app)
            .get('/api/welcome')
            .set('Accept', 'application/json');
        expect(response.status).toBe(200);
        expect(response.body.message).toContain('Allysson');
    });
});
