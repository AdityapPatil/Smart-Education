import React from "react";
import { User } from "lucide-react";

const Profile = () => {
  const student = {
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Student",
    enrolledCourses: 5,
    completedCourses: 2,
  };

  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    student.name
  )}&background=14B8A6&color=fff&size=100`;

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-teal-400 p-6 text-white">
      <header className="mb-6 flex items-center gap-2">
        <User className="w-8 h-8" />
        <h1 className="text-3xl font-bold">Profile</h1>
      </header>

      <article className="glass p-6 rounded-2xl shadow-xl max-w-lg mx-auto">
        <div className="flex flex-col items-center text-center">
          <img
            src={avatarUrl}
            alt={`${student.name} profile`}
            className="w-24 h-24 rounded-full border-4 border-white mb-4"
          />
          <h2 className="text-2xl font-semibold">{student.name}</h2>
          <p className="text-gray-200">{student.email}</p>
          <p className="text-gray-200">Role: {student.role}</p>
        </div>

        <div className="mt-6 space-y-3">
          {[
            { label: "Enrolled Courses", value: student.enrolledCourses },
            { label: "Completed Courses", value: student.completedCourses },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 p-4 rounded-xl flex justify-between"
            >
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Profile;
