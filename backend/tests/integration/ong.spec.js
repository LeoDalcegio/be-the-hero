const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    // beforeEach(async () => {
    //     await connection.migrate.latest();
    // });
    
    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/api/ongs')
            .send({
                name: "ACAPRA",
                email: "contato@contato.com",
                whatsapp: "47984848484",
                city: "brusque",
                uf: "SC"
            });
        
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})