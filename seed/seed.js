// seed.js
import admin from "firebase-admin";
import { readFileSync } from "fs";

// Load service account key
const serviceAccount = JSON.parse(
  readFileSync("./serviceAccountKey.json", "utf8")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const auth = admin.auth();
const db = admin.firestore();

// Users to seed
const users = [
  {
    email: "student1@test.com",
    password: "password123",
    displayName: "Student One",
    role: "student",
  },
  {
    email: "teacher1@test.com",
    password: "password123",
    displayName: "Teacher One",
    role: "teacher",
  },
];

async function seedUsers() {
  for (const user of users) {
    try {
      // Create in Firebase Auth
      const userRecord = await auth.createUser({
        email: user.email,
        password: user.password,
        displayName: user.displayName,
      });

      // Add role in Firestore
      await db.collection("users").doc(userRecord.uid).set({
        name: user.displayName,
        email: user.email,
        role: user.role,
        createdAt: new Date(),
      });

      console.log(`✅ Created ${user.role}: ${user.email}`);
    } catch (error) {
      console.error(`❌ Error creating ${user.email}:`, error.message);
    }
  }
}

seedUsers().then(() => process.exit());
