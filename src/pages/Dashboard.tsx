import React from 'react';
import Button from '../components/Button';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Dashboard</h1>
      <p className="text-lg text-gray-600 mb-8">You have successfully logged in.</p>
      <Button onClick={() => alert('Logged Out')}>Logout</Button>
    </div>
  );
};

export default Dashboard;
