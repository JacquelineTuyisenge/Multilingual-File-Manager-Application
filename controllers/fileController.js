import multer from 'multer';
import File from '../models/file.js';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    fileName: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ 
    storage,
    limits: { fileSize: 20 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf', 'application/msword'];
        if (!allowedTypes.includes(file.mimetype)) {
            return cb(new Error('Invalid file type'));
        }
        cb(null, true);
    }
 });

const uploadFile = upload.single('file');

const createFile = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const { originalname, path, size} = req.file;
        const userId = req.user._id;

        const newFile = new File({ fileName: originalname, path, size, userId });
        await newFile.save();

        res.status(201).json({ status: 'SUCCESS', message: 'File uploaded successfully', file: newFile });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error uploading file', error });
    }
};

const getFiles = async (req, res) => {
    try {

        if (!req.user || !req.user._id) {
            return res.status(404).json({ 
                status: "NOT FOUND",
                message: "USER NOT FOUND" 
            });
        }
        const userId = req.user._id;
        
        const files = await File.find({userId});

        res.status(200).json({ 
            status: "SUCCESS",
            message: "Files fetched successfully!", 
            data: files
        });

    } catch (error) {
        return res.status(500).json({ 
            status: "SERVER ERROR",
            message: "Something went wrong!" });
    }
};

const getSingleFile = async (req, res) => {
    try {

    const { id } = req.params;

        if(!id) {
            return res.status(404).json({ message: 'File not found' });
        }
        const file = await File.findById(id);
        res.status(200).json({status: "SUCCESS", message: "File fetched successfully!", data: file});
    } catch (error) {
        res.status(500).json({ message: 'Error fetching file', error });
    }
};

const updateFile = async (req, res) => {
    const { id } = req.params;
    
    const fileData = req.file ? {
        fileName: req.file.originalname,
        path: req.file.path,
        size: req.file.size
    } : {};

    const { fileName } = req.body;

    try {
        const updatedFile = await File.findByIdAndUpdate(
            id,
            { 
                ...(fileName && { fileName }), 
                ...fileData 
            },
            { new: true }
        );

        if (!updatedFile) {
            return res.status(404).json({ message: 'File not found' });
        }

        res.status(200).json({ 
            status: "SUCCESS",
            message: "File updated successfully!",
            file: updatedFile
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error updating file', error });
    }
};


const deleteFile = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedFile = await File.findByIdAndDelete(id);
        if(!deletedFile) {
            return res.status(404).json({ message: 'File not found' });
        };

        res.status(200).json({ message: 'File deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting file', error });
    }
};

export { uploadFile, createFile, getFiles, getSingleFile, updateFile, deleteFile };
