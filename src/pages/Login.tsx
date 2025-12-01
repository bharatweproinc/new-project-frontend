import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import api from "../api";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
	const [form, setForm] = useState({ email: "", password: "" });
	const navigate = useNavigate();

	const handleChange = (key:string, value:string) => {
		setForm((prevForm) => ({
			...prevForm,
			[key]: value
		}));
	}

	const handleSubmit = async () => {
		const response = await api.post("/login", {
			...form,
		});

		if (response.data.token) {
			// Save token
			localStorage.setItem("auth_token", response.data.token);

			// Set Authorization header globally
			api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
			navigate("/dashboard");
		}

		return response.data;
	}

	useEffect(() => {
		const token = localStorage.getItem("auth_token");
		if (token) {
			navigate("/dashboard");
		}
	}, []);


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