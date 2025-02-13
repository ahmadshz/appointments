import axios from "axios";
import { useState, useEffect } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../../Api/Api";

const UpdateUsers = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    role: "",  
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch user data on mount for editing
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${baseUrl}/user/${id}`);
        setForm(res.data); // Fill the form with current user data
      } catch (err) {
        console.log("Error fetching user:", err);
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update the user using PUT or PATCH request
      await axios.put(`${baseUrl}/user/${id}`, form);
      navigate("/dashboard/users"); // Redirect to users list page after successful update
    } catch (err) {
      if (err.response?.status === 400) {
        setError("User update failed. Please try again.");
      }
    }
  };

  return (
    <div className="rounded-xl h-fit flex flex-col items-center gap-8 bg-gray-100 py-10 px-5">
      <h1 className="text-center text-3xl font-medium text-[#234A6B]">Update User</h1>
      <form onSubmit={handleSubmit} className="w-4/5">
        {/* Name Field */}
        <div className="mb-4">
        <div>{form._id}</div>
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

        {/* Gender Field */}
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

        {/* Role Field */}
        <div className="mb-4">
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>Select Your Role</option>
            <option value="admin">Admin</option>
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-blue-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Update
        </button>

        {error && <p className="text-red-500 text-center mt-5">{error}</p>}
      </form>
    </div>
  );
};

export default UpdateUsers;
