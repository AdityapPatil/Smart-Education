import React from "react";
import { Bell } from "lucide-react";

function Notifications() {
  const notifications = [
    { id: 1, text: "Your Mathematics quiz is due tomorrow.", time: "2h ago" },
    { id: 2, text: "New Physics lecture uploaded.", time: "5h ago" },
    { id: 3, text: "Assignment feedback available.", time: "1d ago" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-teal-400 p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <Bell className="w-8 h-8" /> Notifications
      </h1>

      <div className="glass p-6 rounded-2xl shadow-xl space-y-4">
        {notifications.map((n) => (
          <div
            key={n.id}
            className="flex justify-between items-center bg-white/10 p-4 rounded-xl hover:bg-white/20 transition"
          >
            <span>{n.text}</span>
            <span className="text-sm text-gray-200">{n.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
