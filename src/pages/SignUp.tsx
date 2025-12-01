import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

const SignUp: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = () => {
		console.log("form::", form);
	};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-primary-500">Sign Up</h1>
        <form className="space-y-6">
          <Input 
            label="Name" 
            id="name" 
            type="text" 
            placeholder="Enter your name" 
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <Input 
            label="Email" 
            id="email" 
            type="email" 
            placeholder="Enter your email" 
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <Input 
            label="Password" 
            id="password" 
            type="password" 
            placeholder="Enter your password" 
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <div className="flex items-center justify-between">
            <Button type="button" onClick={handleSubmit}>
              Sign Up
            </Button>
            <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
