'use client';
import BoardTasks from './components/BoardTasks';
import Sidebar from './components/Sidebar';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../utils/firebaseConfig';
import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';
import { data } from '../utils/data';
import AddAndEditBoardModal from './components/AddAndEditBoardModal';

const Home = () => {
  const [userDetails, setUserDetails] = useState<{ [key: string]: any }>();

  const getUserSession = async () => {
    const session = await getSession();
    if (session) {
      setUserDetails(session.user);
    }
  };

  const handleAddDoc = async () => {
    if (userDetails) {
      const docRef = collection(db, 'users', userDetails.email, 'tasks');
      const getDos = await getDocs(docRef);

      if (getDos.docs.length > 0) {
        return;
      } else {
        try {
          await addDoc(
            collection(db, 'users', userDetails.email, 'tasks'),
            data,
          );
        } catch (e) {
          console.error('Error adding document: ', e);
        }
      }
    }
  };

  useEffect(() => {
    getUserSession();
  }, []);

  useEffect(() => {
    handleAddDoc();
  }, [userDetails]);

  return (
    <main className="flex h-full">
      <Sidebar />
      <BoardTasks />
      <AddAndEditBoardModal />
    </main>
  );
};

export default Home;
