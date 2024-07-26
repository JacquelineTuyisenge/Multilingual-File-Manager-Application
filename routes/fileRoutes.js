import express from "express";
import { uploadFile, createFile, getFiles, getSingleFile, updateFile, deleteFile } from "../controllers/fileController.js";
import isLoggedIn from "../middleware/authMiddleware.js";
import { validUpload, validId, validUpdate } from "../middleware/fileMiddleware.js";

const fileRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Files
 *   description: File management
 */

/**
 * @swagger
 * /files:
 *   get:
 *     summary: Get all files
 *     tags: [Files]
 *     responses:
 *       200:
 *         description: Successfully retrieved files
 */
fileRouter.get("/", isLoggedIn, getFiles);

/**
 * @swagger
 * /files/{id}:
 *   get:
 *     summary: Get a single file by ID
 *     tags: [Files]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The file ID
 *     responses:
 *       200:
 *         description: Successfully retrieved file
 *       404:
 *         description: File not found
 */
fileRouter.get("/:id", isLoggedIn, getSingleFile);

/**
 * @swagger
 * /files:
 *   post:
 *     summary: Upload and create a new file
 *     tags: [Files]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *               filename:
 *                 type: string
 *     responses:
 *       201:
 *         description: File uploaded and created successfully
 *       400:
 *         description: Bad request
 */
fileRouter.post("/", isLoggedIn, uploadFile, validUpload, createFile);

/**
 * @swagger
 * /files/{id}:
 *   patch:
 *     summary: Update a file by ID
 *     tags: [Files]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The file ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *               filename:
 *                 type: string
 *     responses:
 *       200:
 *         description: File updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: File not found
 */
fileRouter.patch("/:id", isLoggedIn, uploadFile, validUpdate, updateFile);

/**
 * @swagger
 * /files/{id}:
 *   delete:
 *     summary: Delete a file by ID
 *     tags: [Files]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The file ID
 *     responses:
 *       200:
 *         description: File deleted successfully
 *       404:
 *         description: File not found
 */
fileRouter.delete("/:id", isLoggedIn, validId, deleteFile);

export default fileRouter;
