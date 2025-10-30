import React from "react";
import { BookOpen } from "lucide-react";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  const courseList = [
    { title: "Mathematics", progress: 70 },
    { title: "Physics", progress: 50 },
    { title: "Chemistry", progress: 65 },
    { title: "Computer Science", progress: 85 },
    { title: "Biology", progress: 40 },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-teal-400 p-6 text-white">
      <header className="mb-6 flex items-center gap-2">
        <BookOpen className="w-8 h-8" />
        <h1 className="text-3xl font-bold">Courses</h1>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courseList.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            progress={course.progress}
          />
        ))}
      </div>
    </section>
  );
};

export default Courses;
