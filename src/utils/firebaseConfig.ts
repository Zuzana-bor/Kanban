import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCwMi5NBRrdvoxpOtKhwb7lQble8EEc174',
  authDomain: 'kanban-419107.firebaseapp.com',
  projectId: 'kanban-419107',
  storageBucket: 'kanban-419107.appspot.com',
  messagingSenderId: '707755356356',
  appId: '1:707755356356:web:f2e2a9022474aaa890d991',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore and export it
export const db = getFirestore(app);
