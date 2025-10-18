import mongoose from 'mongoose';
const progressSchema = new mongoose.Schema({
  student:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
  course:{type:mongoose.Schema.Types.ObjectId, ref:'Course'},
  progress:{type:Number, default:0}
});
export default mongoose.model('Progress', progressSchema);
