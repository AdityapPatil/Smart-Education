// src/components/ProtectedRoute.jsx
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function ProtectedRoute({ children, roleRequired }) {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setAllowed(false);
        setLoading(false);
        return;
      }

      try {
        // Check localStorage first
        let role = localStorage.getItem("role");

        // If no role stored, fetch from Firestore
        if (!role) {
          const userRef = doc(db, "users", user.uid);
          const snap = await getDoc(userRef);
          if (snap.exists()) {
            role = snap.data().role;
            localStorage.setItem("role", role); // cache role for next time
          } else {
            setAllowed(false);
            setLoading(false);
            return;
          }
        }

        // Check role
        if (!roleRequired || role === roleRequired) {
          setAllowed(true);
        } else {
          setAllowed(false);
        }
      } catch (err) {
        console.error("ProtectedRoute error:", err);
        setAllowed(false);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [roleRequired]);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (!allowed) return <Navigate to="/" replace />; // redirect to login

  return children;
}
