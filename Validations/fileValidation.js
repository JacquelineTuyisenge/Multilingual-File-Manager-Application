import Joi from 'joi';

const objectIdRegex = /^[a-fA-F0-9]{24}$/;

const fileUploadSchema = Joi.object({
    fileName: Joi.string().required().messages({
        'string.empty': 'File name is required',
        'any.required': 'File name is required',
    }),
    path: Joi.string().required().messages({
        'string.empty': 'File path is required',
        'any.required': 'File path is required',
    }),
    size: Joi.number().required().max(20 * 1024 * 1024).messages({
        'number.base': 'File size must be a number',
        'any.required': 'File size is required',
        'number.max': 'File size must be less than or equal to 20MB',
    }),
    userId: Joi.object().required().messages({
        'any.required': 'File ID is required',
        'object.base': 'File ID must be an object ID',
    }),
});

const fileIdSchema = Joi.object({
    id: Joi.string().required().messages({
        'string.empty': 'File ID is required',
        'any.required': 'File ID is required',
    }),
});

const fileUpdateSchema = Joi.object({
    fileName: Joi.string().optional().messages({
        'string.empty': 'File name cannot be empty',
    }),
    path: Joi.string().optional().messages({
        'string.empty': 'File path cannot be empty',
    }),
    size: Joi.number().optional().max(20 * 1024 * 1024).messages({
        'number.base': 'File size must be a number',
        'number.max': 'File size must be less than or equal to 20MB',
    })
});

const validateFileUpload = (data) => {
    return fileUploadSchema.validate(data);
};

const validateFileId = (data) => {
    return fileIdSchema.validate(data);
};

const validateFileUpdate = (data) => {
    return fileUpdateSchema.validate(data);
};

export { validateFileUpload, validateFileId, validateFileUpdate };