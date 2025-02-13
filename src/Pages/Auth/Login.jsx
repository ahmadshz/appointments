import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import Cookies from "universal-cookie"; // Import universal-cookie
import { baseUrl } from "../../Api/Api";

const Login = () => {
  // State
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // Cookies
  const cookies = new Cookies();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/user/login`, form);
      const token = res.data.token
      cookies.set('auth_token', token);
      navigate('/dashboard');

    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError('Email or password is incorrect');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg mx-4">
        <h2 className="text-4xl font-semibold text-center text-blue-600 mb-10">Hi, Welcome Back! 👋</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-6 relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
              onChange={handleChange}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 bottom-0 transform -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-blue-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Log In
          </button>
          {error && <p className="text-red-500 text-center mt-5">{error}</p>}
        </form>

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

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don t have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
          </p>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            I don t want to create an account
            <Link to="/" className="text-blue-600 hover:underline">Go Back</Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
