import { NavLink } from "react-router-dom";
import { FiUsers , FiHome } from "react-icons/fi";
import { CgCloseR } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";
import { BsCalendarPlus } from "react-icons/bs";

const SideBar = ({ isOpen, setIsOpen }) => {

    const contentSideBar = [
        
        {
            title: 'Home',
            link: '/',
            icon : <FiHome/>
        },
        {
            title: 'Users',
            link: 'users',
            icon : <FiUsers/>
        },
        {
            title: 'Appointments',
            link: 'appointments',
            icon : <SlCalender />
        },
        {
            title: 'Book Appointments',
            link: 'book-appointments',
            icon : <BsCalendarPlus />
        },
        
    ]

    return (
        <div className={`fixed z-10 md:z-0 lg:flex  ${isOpen ? ' w-full' : ''} `}>
            <div
                className={`bg-secondary  h-screen text-white  duration-300 ${isOpen ? " w-full md:w-80 p-5" : " hidden md:block  md:w-16 p-3"
                    }`}
            >

                <button
                    className=" block md:hidden text-white text-2xl  mb-6 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <CgCloseR />
                </button>

                {isOpen && (
                    <div className="mb-6 border-b border-gray-200 pb-4">
                        <h1 className="text-3xl font-semibold">Dashboard</h1>
                    </div>
                )}

                <div className="flex flex-col gap-6">
{

    contentSideBar.map((item, index) => ( 
                    <NavLink key={index}
                        to={`${item.link}`}
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-2 rounded-lg transition-all  ${isActive ? "bg-blue-400 text-white duration-300" : "bg-transparent"
                            }`
                        }
                    >
                        
                    <div className="text-2xl">{item.icon}</div>
                        {isOpen && <span>{item.title}</span>}
                    </NavLink>
))
}
                </div>
            </div>
        </div>
    );
};

export default SideBar;
