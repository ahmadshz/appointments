import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../../../Api/Api";
import Cookies from "universal-cookie";
import { MdOutlineDelete } from "react-icons/md";

const Appointments = () => {
    // State
    const [appointments, setAppointments] = useState([]);

    // Get Token
    const cookies = new Cookies();
    const token = cookies.get('auth_token');

    // Fetch Appointments
    useEffect(() => {
        try {
            const fetchAppointments = async () => {
                const response = await axios.get(`${baseUrl}/appointment`, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    }
                });
                setAppointments(response.data);
            };
            fetchAppointments();
        } catch (error) {
            console.error("Error fetching appointments:", error);
        }
    }, [])

    // Function to delete an appointment
    const deleteUSer = async (id) => {
        try {
            await axios.delete(`${baseUrl}/appointment/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            });
            // Update the state to remove the deleted appointment
            setAppointments((prevAppointments) => prevAppointments.filter(appointment => appointment._id !== id));
        } catch (err) {
            console.log(err)
        }
    }

    console.log(appointments)
    return (
        <div className="overflow-auto rounded-lg shadow-md">
            <table className=" w-full border-collapse bg-white ">
                <thead>
                    <tr className="bg-secondary text-white w-full">
                        <th className="p-3 text-left ">Name Doctor</th>
                        <th className="p-3 text-left ">Name</th>
                        <th className="p-3 text-left ">Email</th>
                        <th className="p-3 text-left ">Time</th>
                        <th className="p-3 text-left ">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Display list of appointments */}
                    {appointments.length > 0 ?
                        appointments.map((item, index) => (
                            <tr className="even:bg-gray-100" key={index}>
                                <td className="p-3 text-left ">{item.doctor?.name}</td>
                                <td className="p-3 text-left ">{item.patient?.name}</td>
                                <td className="p-3 text-left ">{item.patient?.email}</td>
                                <td className="p-3 text-left flex items-center gap-4 ">
                                    <span>{item.time}</span>
                                    <span>{new Date(item.date).toDateString()}</span>
                                </td>
                                <td className="p-3 pl-8 text-left "> <MdOutlineDelete size={20} color="red" onClick={() => deleteUSer(item._id)} /></td>
                            </tr>
                        ))
                        :
                        <tr>
                            <td colSpan={5} className="p-5 text-center ">
                                Loading...
                            </td>
                        </tr>
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Appointments