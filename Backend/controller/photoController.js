import photoModel from "../model/photoModel.js";
import multer from "multer";
import path from "path";
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";


const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });




export const uploadPhoto = async (req, res) => {
  
  try {
    const newPhoto = new photoModel({
      id: uuidv4(), // Generate a unique string ID
      filename: req.file.filename,
      filepath: req.file.path,
      category: req.body.category,

    
      // filename: "test-image.jpg",
      // filepath: "/uploads/test-image.jpg",
      // category: "test-category",
    });

    await newPhoto.save();
    
    res.status(201).json( {newPhoto :newPhoto  , message: "Photo uploaded successfully"} );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};





export const getPhoto = async (req, res) => {   
  try {  
    const photos = await photoModel.find();
    res.status(200).json(photos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




export const deletePhoto = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPhoto = await photoModel.findOneAndDelete({ id });

    if(!deletedPhoto){
      return res.status(404).json({ message: "Photo not found" });
    }else{
      res.json({ message: "Photo deleted", deletedPhoto });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
 