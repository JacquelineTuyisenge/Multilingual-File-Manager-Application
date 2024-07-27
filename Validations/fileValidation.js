import Joi from 'joi';

const objectIdRegex = /^[a-fA-F0-9]{24}$/;

const fileUploadSchema = Joi.object({
    fileName: Joi.string().required().messages({
        'string.empty': 'file_name_required',
        'any.required': 'file_name_required',
    }),
    path: Joi.string().required().messages({
        'string.empty': 'file_path_required',
        'any.required': 'file_path_required',
    }),
    size: Joi.number().required().max(20 * 1024 * 1024).messages({
        'number.base': 'file_size_number',
        'any.required': 'file_size_required',
        'number.max': 'file_size_max',
    }),
    userId: Joi.string().regex(objectIdRegex).required().messages({
        'any.required': 'user_id_required',
        'string.pattern.base': 'user_id_invalid',
    }),
});

const fileIdSchema = Joi.object({
    id: Joi.string().regex(objectIdRegex).required().messages({
        'string.empty': 'file_id_required',
        'any.required': 'file_id_required',
        'string.pattern.base': 'file_id_invalid',
    }),
});

const fileUpdateSchema = Joi.object({
    fileName: Joi.string().optional().messages({
        'string.empty': 'file_name_invalid',
    }),
    path: Joi.string().optional().messages({
        'string.empty': 'file_path_invalid',
    }),
    size: Joi.number().optional().max(20 * 1024 * 1024).messages({
        'number.base': 'file_size_number',
        'number.max': 'file_size_max',
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
