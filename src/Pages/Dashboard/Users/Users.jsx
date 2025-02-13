import axios from "axios";
import { useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { baseUrl } from "../../../Api/Api";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get(`${baseUrl}/user`);
                setUsers(res.data);
            } catch (err) {
                console.log("Error fetching users:", err);
            }
        };

        fetchUsers();
    }, []);

    const deleteUSer = async (id) => {
        try {
            await axios.delete(`${baseUrl}/user/${id}`)
            setUsers((prevUsers) => prevUsers.filter(user => user._id !== id));
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="">
            <div className="overflow-auto rounded-lg shadow-md">
                <table className="min-w-max w-full border-collapse bg-white">
                    <thead>
                        <tr className="bg-secondary text-white">
                            <th className="p-3 text-left whitespace-nowrap">ID</th>
                            <th className="p-3 text-left whitespace-nowrap">Name</th>
                            <th className="p-3 text-left whitespace-nowrap">Email</th>
                            <th className="p-3 text-left whitespace-nowrap">Role</th>
                            <th className="p-3 text-left whitespace-nowrap">Gender</th>
                            <th className="p-3 text-left whitespace-nowrap">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((item, index) => (
                                <tr key={index} className="border-b even:bg-gray-100 hover:bg-gray-200">
                                    <td className="p-3">{index + 1}</td>
                                    <td className="p-3">{item.name}</td>
                                    <td className="p-3 break-all">{item.email}</td>
                                    <td className="p-3">{item.role}</td>
                                    <td className="p-3">{item.gender}</td>
                                    <td className="p-3 flex items-center gap-2">
                                        <Link to={`/dashboard/users/${item._id}`}>
                                            <FaUserEdit size={20} color="blue" />
                                        </Link>
                                        <MdOutlineDeleteOutline onClick={() => deleteUSer(item._id)} size={20} color="red" />
                                    </td>

                                </tr>

                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center p-5">
                                    Loading...
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
