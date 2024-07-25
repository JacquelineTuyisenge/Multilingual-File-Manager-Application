import express from "express";
import { uploadFile, createFile, getFiles, getSingleFile, updateFile, deleteFile } from "../controllers/fileController.js";
import isLoggedIn from "../middleware/authMiddleware.js";
import { validUpload, validId, validUpdate } from "../middleware/fileMiddleware.js";

const fileRouter = express.Router();

fileRouter.get("/", isLoggedIn, getFiles);
fileRouter.get("/:id", isLoggedIn, getSingleFile);
fileRouter.post("/", isLoggedIn, uploadFile, validUpload, createFile);
fileRouter.patch("/:id", isLoggedIn, uploadFile, validUpdate, updateFile);
fileRouter.delete("/:id", isLoggedIn, validId, deleteFile);

export default fileRouter