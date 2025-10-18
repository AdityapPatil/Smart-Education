import React from 'react'
import CourseCard from './CourseCard'
import Progress from './Progress'

export default function StudentDashboard(){
  return (
    <div>
      <header className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold" style={{fontFamily:'Poppins'}}>Hello, Student</h2>
          <p className="text-slate-300">Here's your learning snapshot.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-slate-300">Points: <span className="font-semibold">1280</span></div>
          <div className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center">RS</div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card-neo">
          <h3 className="text-xl font-semibold mb-4">Progress</h3>
          <Progress />
        </div>

        <aside className="space-y-4">
          <div className="card-neo p-4">
            <h4 className="font-semibold">Notifications</h4>
            <ul className="text-slate-300 mt-2 text-sm space-y-2">
              <li>Quiz due in 2 days</li>
              <li>Assignment graded</li>
            </ul>
          </div>
          <div className="card-neo p-4">
            <h4 className="font-semibold">Achievements</h4>
            <div className="mt-2">🎖️ Bronze learner</div>
          </div>
        </aside>
      </div>

      <section className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Courses</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CourseCard title="Mathematics" progress={70} />
          <CourseCard title="Physics" progress={50} />
          <CourseCard title="CS - Data Structures" progress={30} />
        </div>
      </section>
    </div>
  )
}
