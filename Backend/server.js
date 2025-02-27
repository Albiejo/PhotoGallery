import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import photoRouter from './routes/photoRoutes.js'


dotenv.config();

const errorHandler = (error, req, res, next) => {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  };
  

const app = express();

app.use(cors());
app.use(express.json());

app.use('/uploads' , express.static('uploads'));
app.use('/api/photos' , photoRouter)

app.use(errorHandler);



mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(3000,()=>{
        console.log("Server is running on port 3000")
    })
})
.catch((error)=>{
    console.error(error);
});
