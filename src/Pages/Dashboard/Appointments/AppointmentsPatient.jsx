import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../../../Api/Api";
import Cookies from "universal-cookie";
import { MdEditCalendar, MdOutlineDelete } from "react-icons/md";

const AppointmentsPatient = () => {
    // State to store the list of appointments
    const [appointments, setAppointments] = useState([]);

    // Get Cookies
    const cookies = new Cookies();
    const token = cookies.get("auth_token");

    // Fetch appointments
    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get(`${baseUrl}/appointment/patient`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setAppointments(response.data);
            } catch (error) {
                console.error("Error fetching appointments:", error);
            }
        };
        fetchAppointments();
    }, []);

    // Function to delete an appointment
    const deleteUser = async (id) => {
        try {
            await axios.delete(`${baseUrl}/appointment/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // Update the state to remove the deleted appointment
            setAppointments((prevAppointments) =>
                prevAppointments.filter((appointment) => appointment._id !== id)
            );
        } catch (err) {
            console.error("Error deleting appointment:", err);
        }
    };

    return (
        <div className="overflow-auto rounded-lg shadow-md">
            <table className="w-full border-collapse bg-white">
                <thead>
                    <tr className="bg-secondary text-white w-full">
                        <th className="p-3 text-left">Doctor Name</th>
                        <th className="p-3 text-left">Date</th>
                        <th className="p-3 text-left">Time</th>
                        <th className="p-3 text-left">Reason</th>
                        <th className="p-3 text-left">Status</th>
                        <th className="p-3 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Display list of appointments */}
                    {appointments.length > 0 ? (
                        appointments.map((item) => (
                            <tr className="even:bg-gray-100" key={item._id}>
                                <td className="p-3 text-left">{item.doctor.name}</td>
                                <td className="p-3 text-left">{item.date}</td>
                                <td className="p-3 text-left">{item.time}</td>
                                <td className="p-3 text-left">{item.reason}</td>
                                <td className="p-3 text-left">{item.status}</td>
                                <td className="p-3  flex gap-2">
                                    <MdEditCalendar color="blue" size={20} className="cursor-pointer" />
                                    <MdOutlineDelete
                                        size={20}
                                        color="red"
                                        className="cursor-pointer"
                                        onClick={() => deleteUser(item._id)}
                                    />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6} className="p-5 text-center">
                                Loading...
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentsPatient;
