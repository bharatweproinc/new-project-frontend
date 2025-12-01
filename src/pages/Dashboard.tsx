import React from 'react';
import Button from '../components/Button';
import api from '../api';

const Dashboard: React.FC = () => {
  	const logout = async () => {
		const response = await api.post("/logout");

		// Remove token
		localStorage.removeItem("auth_token");

		// Remove Authorization header
		delete api.defaults.headers.common["Authorization"];

		return response.data;
  	};

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-4xl font-bold mb-8">Welcome to the Dashboard</h1>
			<p className="text-lg text-gray-600 mb-8">You have successfully logged in.</p>
			<Button onClick={logout}>Logout</Button>
		</div>
	);
};

export default Dashboard;
