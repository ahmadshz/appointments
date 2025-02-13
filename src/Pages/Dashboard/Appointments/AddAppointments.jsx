import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../Api/Api";
import Cookies from "universal-cookie";

const AddAppointments = () => {
    const [appointmentData, setAppointmentData] = useState({
        doctorId: "",
        date: "",
        time: "",
        reason: "", 
    });

    const cookies = new Cookies();
    const token = cookies.get('auth_token');
    console.log(token);

    const handleChange = (e) => {
        setAppointmentData({ ...appointmentData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `${baseUrl}/appointment`,
                appointmentData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    }
                }
            );

            alert("Appointment booked successfully!");
            console.log(response.data);
        } catch (error) {
            console.error("Error booking appointment:", error);
            alert("Failed to book appointment. Please try again.");
        }
    };

    return (
        <div className="border border-secondary rounded-t-2xl bg-gray-200 shadow-xl">
            <div className="w-full bg-secondary h-16 flex justify-center items-center p-10 rounded-t-xl">
                <h1 className="text-white text-3xl font-medium">Book Appointments</h1>
            </div>

            <form className="flex flex-col gap-6 p-10" onSubmit={handleSubmit}>
                <select
                    name="doctorId"
                    value={appointmentData.doctorId}
                    onChange={handleChange}
                    className="w-full md:w-1/3 mx-auto p-4 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                >
                    <option value="" disabled>Choose a doctor</option>
                    <option value="67a659aa03984571d23d7c17">Dr. John</option>
                    <option value="67a9de8f6bb6496f83418e9e">Dr. Sarah</option>
                </select>

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

                <textarea
                    name="reason"
                    value={appointmentData.reason}
                    onChange={handleChange}
                    rows="5"
                    className="p-5 border rounded-lg w-full bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Reason for the appointment"
                ></textarea>

                <button type="submit" className="bg-primary w-fit text-white font-medium text-lg px-16 py-3 rounded-lg mt-6 shadow-md hover:bg-blue-600 duration-500">
                    Send
                </button>
            </form>
        </div>
    );
};

export default AddAppointments;
