import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [session, setSession] = useState(null);

    useEffect(() => {
        setSession(session);
    }, []);

    const handleGetStarted = () => {
        if (session) navigate("/dashboard");
        else navigate("/login");
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 border-red-300 border-2">
            {/* NAVBAR */}
            <header className="container mx-auto px-6 py-6 flex justify-between items-center">
                <h1 className="text-3xl font-bold">YourApp</h1>

                <Button onClick={handleGetStarted}>
                    {session ? "Dashboard" : "Login"}
                </Button>
            </header>

            {/* HERO SECTION */}
            <section className="container mx-auto px-6 py-20 text-center">
                <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    Build Modern Apps
                    <span className="block text-primary mt-2">
                        With Speed & Simplicity
                    </span>
                </h2>

                <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
                    Create fast, secure, and beautiful applications without setup headaches. Start building in just a few clicks.
                </p>

                <div className="mt-10">
                    <Button onClick={handleGetStarted}>Get Started</Button>
                </div>
            </section>
        </div>
    );
};

export default Home;
