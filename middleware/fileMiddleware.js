import { validateFileUpload, validateFileId, validateFileUpdate } from '../Validations/fileValidation.js';

    const validUpload = (req, res, next) => {
        if (req.file) {
            const { originalname, path, size } = req.file;
            const userId = req.user ? req.user._id : undefined;
            
            const { error } = validateFileUpload({ fileName: originalname, path, size, userId });
            if (error) {
                return res.status(400).json({ message: error.details[0].message });
            }
        } else {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        next();
    };

const validId = async (req, res, next) => {
    const { error } = validateFileId(req.params);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

const validUpdate = async (req, res, next) => {
    const { error } = validateFileUpdate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

export { validUpload, validId, validUpdate };