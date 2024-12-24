'use client';

import React from 'react';
// import useUserProfile from '../hooks/use-user-profile';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("token");
    router.push('/login');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <p>Welcome!</p>
      <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded mt-4">
        Logout
      </button>
    </div>
  );
};

export default Home;