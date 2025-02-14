import photoModel from "../model/photoModel.js";
import multer from "multer";
import path from "path";

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
      filename: req.file.filename,
      filepath: req.file.path,
      category: req.body.category,
    });

    await newPhoto.save();
    res.status(201).json(newPhoto);
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
    await photoModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Photo deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
