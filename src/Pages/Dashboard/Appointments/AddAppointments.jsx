import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../Api/Api";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const AddAppointments = () => {
    // State to store appointment details
    const [appointmentData, setAppointmentData] = useState({
        doctorId: "",
        date: "",
        time: "",
        reason: "",
    });

    // State to store the list of available doctors
    const [doctors, setDoctors] = useState([]);
    const navigate = useNavigate();

    // Get authentication token from cookies
    const cookies = new Cookies();
    const token = cookies.get("auth_token");

    // Handle input change
    const handleChange = (e) => {
        setAppointmentData({ ...appointmentData, [e.target.name]: e.target.value });
    };

    // Fetch all doctors when the component mounts
    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get(`${baseUrl}/user/find/doctors`);
                setDoctors(response.data);
            } catch (error) {
                console.error("Error fetching doctors:", error);
            }
        };
        fetchDoctors();
    }, []);

    // Handle form submission to book an appointment
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                `${baseUrl}/appointment`,
                appointmentData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            alert("Appointment booked successfully!");
            navigate("/dashboard/appointments-patient");
        } catch (error) {
            console.error("Error booking appointment:", error);
            alert("Failed to book appointment. Please try again.");
        }
    };

    return (
        <div className="border border-secondary rounded-t-2xl bg-gray-200 shadow-xl">
            {/* Header Section */}
            <div className="w-full bg-secondary h-16 flex justify-center items-center p-10 rounded-t-xl">
                <h1 className="text-white text-3xl font-medium">Book an Appointment</h1>
            </div>

            {/* Appointment Form */}
            <form className="flex flex-col gap-6 p-10" onSubmit={handleSubmit}>
     
                {/* Doctor Selection */}
                <select
                    name="doctorId"
                    value={appointmentData.doctorId}
                    onChange={handleChange}
                    className="w-full md:w-1/3 mx-auto p-4 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                >
                    <option value="" disabled>Choose a doctor</option>
                    {doctors.map((doctor) => (
                        <option key={doctor._id} value={doctor._id}>
                            {doctor.name}
                        </option>
                    ))}
                </select>

                {/* Date & Time Selection */}
                <div className="flex flex-col md:flex-row gap-6">
                    <input
                        type="date"
                        name="date"
                        value={appointmentData.date}
                        onChange={handleChange}
                        className="w-full md:w-1/2 p-5 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    />
                    <input
                        type="time"
                        name="time"
                        value={appointmentData.time}
                        onChange={handleChange}
                        className="w-full md:w-1/2 p-5 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    />
                </div>

                {/* Reason for Appointment */}
                <textarea
                    name="reason"
                    value={appointmentData.reason}
                    onChange={handleChange}
                    rows="5"
                    className="p-5 border rounded-lg w-full bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Reason for the appointment"
                    required
                ></textarea>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-primary w-fit text-white font-medium text-lg px-16 py-3 rounded-lg mt-6 shadow-md hover:bg-blue-600 transition duration-500"
                >
                    Book Now
                </button>
            </form>
        </div>
    );
};

export default AddAppointments;
