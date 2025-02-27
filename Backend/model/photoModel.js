import mongoose from 'mongoose';


const photoSchema = new mongoose.Schema({
    id: { type: String, unique: true, required: true }, 
    filename:String,
    filepath:String,
    category:String,
    createdAt:{type:Date,default:Date.now}
})




export default mongoose.model('Photo',photoSchema);
