const request = require('supertest');
const app = require('../app.js');
const validateUser = require('../Validations/userValidation');

describe('File Manager API', () => {

    it('should return 200 and welcome message', async () => {

        const response = await request(app).get('/api/');

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Welcome to Multilingual File Manager API');
    });

    it("should return error if username is empty", async () => {
        const invalidData = {
            "username": "",
            "email": "user@gmail.com",
            "password": "Password123",
            "confirmPassword": "Password123"
        };
        const { error } = validateUser(invalidData);
        expect(error).toBeDefined();
        expect(error.details[0].message).toEqual("Name field can't be empty!");
    });
});
