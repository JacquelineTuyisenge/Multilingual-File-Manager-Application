const { validateFileUpload, validateFileId, validateFileUpdate } = require('../Validations/fileValidation.js');
const Joi = require('joi');
const dotenv = require('dotenv');
dotenv.config();

describe('File Validation', () => {

    describe('validateFileUpload', () => {

        it('should return an error if fileName is missing', () => {
            const invalidData = {
                path: '/files/example.txt',
                size: 1024 * 1024,
                userId: '60d4f1f77c08b9f5f8b8d8b1'
            };
            const { error } = validateFileUpload(invalidData);
            expect(error).toBeDefined();
            expect(error.details[0].message).toBe('File name is required');
        });

    });

    describe('validateFileId', () => {
        it('should validate a correct file ID', () => {
            const validData = { id: '60d4f1f77c08b9f5f8b8d8b1' };
            const { error } = validateFileId(validData);
            expect(error).toBeUndefined();
        });

        it('should return an error if id is missing', () => {
            const invalidData = {};
            const { error } = validateFileId(invalidData);
            expect(error).toBeDefined();
            expect(error.details[0].message).toBe('File ID is required');
        });

    });

    describe('validateFileUpdate', () => {
        it('should validate a correct file update object', () => {
            const validData = {
                fileName: 'new-name.txt',
                path: '/files/new-name.txt',
                size: 2048 * 1024 
            };
            const { error } = validateFileUpdate(validData);
            expect(error).toBeUndefined();
        });

        it('should return an error if size exceeds the limit', () => {
            const invalidData = {
                size: 30 * 1024 * 1024
            };
            const { error } = validateFileUpdate(invalidData);
            expect(error).toBeDefined();
            expect(error.details[0].message).toBe('File size must be less than or equal to 20MB');
        });

    });

});
