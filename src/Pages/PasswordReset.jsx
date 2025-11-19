import React, { useContext, useState } from "react";

import { sendPasswordResetEmail } from "firebase/auth";
import { AuthContext } from "../Provider/AuthProvider";

const PasswordReset = () => {
    const { auth } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleReset = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        try {
            await sendPasswordResetEmail(auth, email, {
                url: "http://localhost:5173/login", 
            });
            setMessage("Password reset email sent! Check your inbox.");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-50 p-6">
            <title>GreenNest-Reset Password</title>
            <form
                onSubmit={handleReset}
                className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-4">Reset Password</h2>

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-3 border border-gray-300 rounded mb-4"
                />

                <button
                    type="submit"
                    className="w-full p-3 bg-green-700 text-white rounded hover:bg-green-800 transition"
                >
                    Send Reset Email
                </button>

                {message && <p className="mt-4 text-green-700">{message}</p>}
                {error && <p className="mt-4 text-red-600">{error}</p>}
            </form>
        </div>
    );
};

export default PasswordReset;
