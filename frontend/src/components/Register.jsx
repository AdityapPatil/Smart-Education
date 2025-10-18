import React, { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // 1️⃣ Create account in Firebase Auth
      const userCred = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      // 2️⃣ Update profile with display name
      await updateProfile(userCred.user, { displayName: form.name });

      // 3️⃣ Store user data in Firestore
      await setDoc(doc(db, "users", userCred.user.uid), {
        name: form.name,
        email: form.email,
        role: form.role,
        createdAt: new Date(),
      });

      // 4️⃣ Cache role in localStorage
      localStorage.setItem("role", form.role);

      // 5️⃣ Redirect immediately based on role
      if (form.role === "student") {
        navigate("/student");
      } else if (form.role === "teacher") {
        navigate("/teacher");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto glass p-8 rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4">Create an account</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          placeholder="Full name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white/5"
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white/5"
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white/5"
        />
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white/5"
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
        <button
          type="submit"
          disabled={loading}
          className="btn-accent w-full text-white mt-2"
        >
          {loading ? "Creating..." : "Create account"}
        </button>
        <div className="mt-4 text-sm text-slate-300">Already have an account? <a href="/" className="text-white underline">Login</a></div>
      </form>
      {error && <p className="text-red-400 mt-3">{error}</p>}
    </div>
  );
}

