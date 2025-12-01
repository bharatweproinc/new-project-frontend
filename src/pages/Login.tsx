import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

const Login: React.FC = () => {
	const [form, setForm] = useState({ email: "", password: "" });

	const handleChange = (key:string, value:string) => {
		setForm((prevForm) => ({
			...prevForm,
			[key]: value
		}));
	}

	const handleSubmit = () => {
		console.log("form::", form);
	}

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
				<h1 className="text-3xl font-bold text-center text-primary-500">Login</h1>
				<form className="space-y-6">
					<Input
						label="Email"
						id="email"
						type="email"
						placeholder="Enter your email"
						value={form.email}
						onChange={(e) => handleChange("email", e.target.value)}
					/>
					<Input
						label="Password"
						id="password"
						type="password"
						placeholder="Enter your password"
						value={form.password}
						onChange={(e) => handleChange("password", e.target.value)}
					/>
					<div className="flex items-center justify-between">
						<Button type="button" onClick={handleSubmit}>Sign In</Button>
						<Link
							to="/signup"
							className="font-medium text-primary-600 hover:text-primary-500"
						>
							Don't have an account? Sign up
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;