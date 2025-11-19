import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { AuthContext } from "../Provider/AuthProvider";
import { getAuth, signInWithPopup, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const { createUser, setUser, provider, updateUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");


  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
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

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(user, { displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            form.reset();
            navigate(location.state ? location.state : "/");
            toast.success("✅ Registration successful!");
          })
          .catch((err) => {
            console.error("❌ Profile update error:", err);
            toast.error("❌ Profile update failed!");
          });
      })
      .catch((error) => {
        console.error("❌ Error creating user:", error.message);
        setError(error.message);
        // toast.error(`❌ Registration failed: ${error.message}`);
      });

  };

  const handleLogInWithGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("✅ Logged in with Google!");
      })
      .catch((error) => {
        console.error("❌ Google login error:", error.message);
        toast.error(`❌ Google login failed: ${error.message}`);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <title>GreenNest-SignUp</title>
      <div className="bg-white/70 backdrop-blur-md p-10 rounded-2xl shadow-xl w-full max-w-md border border-green-100">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-6">
          Create Your GreenNest Account
        </h2>
        <p className="text-green-600 text-center mb-8">
          Join our nature-loving community and grow your indoor garden
        </p>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-green-700 font-semibold mb-2">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>

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

          <div>
            <label className="block text-green-700 font-semibold mb-2">
              Photo URL
            </label>
            <input
              name="photo"
              type="url"
              placeholder="Enter your profile photo link"
              className="w-full px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>

          
          <div className="relative">
            <label className="block text-green-700 font-semibold mb-2">
              Password
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a strong password"
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

          
          {error && (
            <p className="text-red-500 text-sm font-medium">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-full font-semibold hover:bg-green-800 transition-all duration-300"
          >
            Register
          </button>

          <button
            onClick={handleLogInWithGoogle}
            type="button"
            className="w-full flex items-center justify-center gap-2 mt-4 bg-white border border-green-300 text-green-700 py-3 rounded-full shadow-md hover:bg-green-50 transition-all duration-300"
          >
            <FcGoogle size={22} />
            <span className="font-semibold">Sign up with Google</span>
          </button>
        </form>

        <p className="text-center text-green-700 mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/auth/login" className="font-semibold hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

