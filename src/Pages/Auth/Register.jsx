import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import Cookies from "universal-cookie";
import { baseUrl } from "../../Api/Api";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/user/register`, form);
         const token =  res.data.token
         cookies.set('token', token, { path: '/' });
         navigate('/dashboard/users');
      
    } catch (err) {
      if (err.response?.status === 400) {
        setError("User already exists, please enter a new user.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary">
      <div className="container max-w-md p-6 bg-white rounded-lg shadow-lg mx-4">
        <h2 className="text-4xl font-semibold text-center text-blue-600 mb-10">
          Create an account
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          {/* Password Field */}
          <div className="mb-6 relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
              name="password"
              value={form.password}
              onChange={handleChange}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 bottom-0 transform -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
            </span>
          </div>

          {/* Gender Field ✅ */}
          <div className="mb-4">
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-blue-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>

          {error && <p className="text-red-500 text-center mt-5">{error}</p>}
        </form>

        {/* OR with Social Login */}
        <div className="flex items-center justify-center space-x-2 mt-8">
          <hr className="border-t border-gray-300 flex-1" />
          <span className="text-gray-500">Or with</span>
          <hr className="border-t border-gray-300 flex-1" />
        </div>

        <button
          type="submit"
          className="w-full mt-8 mb-4 py-3 px-4 relative bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <FaFacebookF size={25} className="absolute left-4 top-3" />
          Login with Facebook
        </button>

        <button
          type="submit"
          className="w-full relative py-3 px-4 border-[1.5px] border-slate-800 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-700 duration-300"
        >
          <FcGoogle className="absolute top-3 left-4 " size={25} />
          Log In with Google
        </button>

        {/* Links */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?
            <Link to="/login" className="text-blue-600 hover:underline"> Login</Link>
          </p>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            I don t want to create an account
            <Link to="/" className="text-blue-600 hover:underline"> Go Back</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
