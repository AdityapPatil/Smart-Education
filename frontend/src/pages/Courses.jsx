import React from "react";
import { BookOpen } from "lucide-react";
import CourseCard from "../components/CourseCard";

function Courses() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-teal-400 p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <BookOpen className="w-8 h-8" /> Courses
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CourseCard title="Mathematics" progress={70} />
        <CourseCard title="Physics" progress={50} />
        <CourseCard title="Chemistry" progress={65} />
        <CourseCard title="Computer Science" progress={85} />
        <CourseCard title="Biology" progress={40} />
      </div>
    </div>
  );
}

export default Courses;
