import Course from '../models/Course.js';
export const createCourse = async (req,res)=>{
  try{ const course = await Course.create(req.body); res.json(course); }catch(err){ res.status(500).json({error:err.message}); }
};
export const getCourses = async (req,res)=>{ try{ const courses = await Course.find(); res.json(courses);}catch(err){ res.status(500).json({error:err.message}); } };
