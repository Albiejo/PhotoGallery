import express from "express";
import {uploadPhoto , getPhoto , deletePhoto} from "../controller/photoController.js";
import multer from "multer";


const upload = multer({dest:'uploads/'})

const router = express.Router();



router.post('/upload', upload.single("image") , uploadPhoto);


router.get('/', getPhoto);



router.delete('/:id',deletePhoto);


export default router;




