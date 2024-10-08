import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "process.env.FIREBASE_API",
  authDomain: "process.env.AUTH_DOMAIN",
  projectId: "join-waitlist-59ed4",
  storageBucket: "join-waitlist-59ed4.appspot.com",
  messagingSenderId: "51834626343",
  appId: "1:51834626343:web:e9b50c351aaedeb20fc902",
  measurementId: "G-0744MLP9FL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Conditionally initialize Analytics
let analytics: ReturnType<typeof getAnalytics> | undefined;

(async () => {
  if (typeof window !== "undefined" && await isSupported()) {
    analytics = getAnalytics(app);
  }
})();

export { app, analytics, db };
