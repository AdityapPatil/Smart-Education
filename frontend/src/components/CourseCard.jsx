import React from 'react'
export default function CourseCard({title, progress}){
  return (
    <div className="card-neo p-4">
      <h4 className="font-semibold">{title}</h4>
      <div className="mt-3">
        <div className="w-full bg-white/6 h-2 rounded-full">
          <div style={{width:`${progress}%`}} className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400"></div>
        </div>
        <div className="text-sm text-slate-300 mt-2">Progress: {progress}%</div>
        <button className="btn-accent text-white mt-3">Continue</button>
      </div>
    </div>
  )
}
