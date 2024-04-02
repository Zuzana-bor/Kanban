import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAIFmT7YCjvz_2gQvy6qY4PMsXq0bkt2P4',
  authDomain: 'kanban-ecbcc.firebaseapp.com',
  projectId: 'kanban-ecbcc',
  storageBucket: 'kanban-ecbcc.appspot.com',
  messagingSenderId: '506930646875',
  appId: '1:506930646875:web:25fa2283e6d3cbb9fa947e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore and export it
export const db = getFirestore(app);
