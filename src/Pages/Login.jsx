import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { getAuth, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { signIn, setUser, provider } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // 🔒 Password validation
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    setError("");

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(`${location.state? location.state : "/"}`);
        toast.success(`✅ Welcome back, ${user.displayName || "User"}!`);
      })
      .catch((error) => {
        console.error("❌ Login error:", error.message);
        setError("Invalid email or password.");
        toast.error("❌ Login failed. Invalid email or password.");
      });
  };

  const handleLogInWithGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(`${location.state? location.state : "/"}`);
        toast.success(`✅ Logged in with Google! Welcome, ${user.displayName || "User"}!`);
      })
      .catch((error) => {
        console.error("❌ Google login error:", error.message);
        toast.error(`❌ Google login failed: ${error.message}`);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <title>GreenNest-Login</title>
      <div className="bg-white/70 backdrop-blur-md p-10 rounded-2xl shadow-xl w-full max-w-md border border-green-100">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-6">
          Login to GreenNest
        </h2>
        <p className="text-green-600 text-center mb-8">
          Welcome back! Please log in to continue nurturing your plants
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-green-700 font-semibold mb-2">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label className="block text-green-700 font-semibold mb-2">
              Password
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[38px] text-green-600 hover:text-green-800"
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

          <div className="text-right">
            <Link
              to="/auth/reset-password"
              className="text-green-700 hover:underline text-sm"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-full font-semibold hover:bg-green-800 transition-all duration-300"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-green-200" />
          <span className="mx-3 text-green-600 text-sm font-medium">OR</span>
          <hr className="flex-grow border-green-200" />
        </div>

        <button
          onClick={handleLogInWithGoogle}
          type="button"
          className="w-full flex items-center justify-center gap-3 bg-white border border-green-300 text-green-800 py-3 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 shadow-sm"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Login with Google
        </button>

        <p className="text-center text-green-700 mt-6 text-sm">
          Don’t have an account?{" "}
          <Link to="/auth/sign-up" className="font-semibold hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

