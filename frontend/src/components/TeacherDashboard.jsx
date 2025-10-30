import React from "react";

const TeacherDashboard = () => {
  return (
    <section>
      <header className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold" style={{ fontFamily: "Poppins" }}>
            Hello, Teacher
          </h2>
          <p className="text-slate-300">
            Manage courses and monitor students.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="btn-accent text-white" type="button">
            New Course
          </button>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 card-neo p-4">
          <h3 className="text-xl font-semibold">Class Analytics</h3>
          <p className="text-slate-300 mt-2">
            Average progress, weak topics, and more.
          </p>
        </section>

        <aside className="card-neo p-4">
          <h4 className="font-semibold">Recent Activity</h4>
          <p className="text-slate-300 text-sm mt-2">
            Student X completed Module 3
          </p>
        </aside>
      </main>
    </section>
  );
};

export default TeacherDashboard;
