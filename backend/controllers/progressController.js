import Progress from '../models/Progress.js';
export const updateProgress = async (req,res)=>{
  try{
    const {studentId, courseId, progress} = req.body;
    const updated = await Progress.findOneAndUpdate({student:studentId, course:courseId}, {progress}, {upsert:true, new:true});
    res.json(updated);
  }catch(err){ res.status(500).json({error:err.message}); }
};
export const getProgress = async (req,res)=>{
  try{ const studentId = req.params.studentId; const progress = await Progress.find({student:studentId}).populate('course'); res.json(progress); }catch(err){ res.status(500).json({error:err.message}); }
};
