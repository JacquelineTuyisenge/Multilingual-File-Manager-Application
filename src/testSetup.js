const express = require('express');
const multer = require('multer');
const { createFile, getFiles, getSingleFile, updateFile, deleteFile } = require('./controllers/fileController.js');
const apps = express();

apps.use(express.json());

apps.post('/api/files', multer().single('file'), createFile);
apps.get('/api/files', getFiles);
apps.get('/api/files/:id', getSingleFile);
apps.put('/api/files/:id', multer().single('file'), updateFile);
apps.delete('/api/files/:id', deleteFile);

module.exports = apps;
