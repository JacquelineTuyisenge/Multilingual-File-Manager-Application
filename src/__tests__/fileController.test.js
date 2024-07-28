const request = require('supertest');
const apps = require('../testSetup.js');
const File = require('../models/file.js');
const { testMongoConnect, teatMongoDisconnect } = require('../mongo.js');

describe('File Management API Tests', () => {

    beforeAll(async () => {
        await testMongoConnect();
    });

    afterEach(async () => {
        await File.deleteMany({});
    });

    afterAll(async () => {
        await teatMongoDisconnect();
    });

    it('should delete a file', async () => {
        File.findByIdAndDelete = jest.fn().mockResolvedValue({ fileName: 'test.jpg', path: 'uploads/test.jpg', size: 12345 });

        const response = await request(apps).delete('/api/files/1').expect(200);

        expect(response.body.message).toBe('File deleted successfully');
    });
});
