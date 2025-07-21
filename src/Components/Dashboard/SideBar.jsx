import { NavLink } from "react-router-dom";
import { FiUsers, FiHome } from "react-icons/fi";
import { CgCloseR } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";
import { BsCalendarPlus } from "react-icons/bs";
import Cookies from 'universal-cookie';
import { jwtDecode } from 'jwt-decode';

const SideBar = ({ isOpen, setIsOpen }) => {
  const cookies = new Cookies();
  const token = cookies.get('auth_token');

  let userRole = null;
  if (token) {
    try {
      const decoded = jwtDecode(token);
      userRole = decoded?.role?.toLowerCase();
    } catch (error) {
      console.error('Invalid token in Sidebar:', error);
    }
  }

  // كل رابط بتحدد أي رول لازم يكون عشان يشوفه
  const contentSideBar = [
    {
      title: 'Home',
      link: '/',
      icon: <FiHome />,
      roles: ['admin', 'patient', 'doctor'],  // للجميع
    },
    {
      title: 'Users',
      link: 'users',
      icon: <FiUsers />,
      roles: ['admin'], // بس الأدمن
    },
    {
      title: 'Appointments',
      link: 'appointments',
      icon: <SlCalender />,
      roles: ['admin'], // بس الأدمن
    },
    {
      title: 'Appointments Patient',
      link: 'appointments-patient',
      icon: <SlCalender />,
      roles: ['patient'], // بس المريض
    },
    {
      title: 'Appointments Doctor',
      link: 'appointments-doctor',
      icon: <SlCalender />,
      roles: ['doctor'], // بس الطبيب
    },
    {
      title: 'Book Appointments',
      link: 'book-appointments',
      icon: <BsCalendarPlus />,
      roles: ['patient'], // بس المريض
    },
  ];

  // فلترة الروابط حسب الرول
  const filteredLinks = contentSideBar.filter(item =>
    item.roles.includes(userRole)
  );

  return (
    <div className={`fixed z-10 md:z-0 lg:flex  ${isOpen ? ' w-full' : ''} `}>
      <div
        className={`bg-secondary  h-screen text-white  duration-300 ${isOpen ? " w-full md:w-80 p-5" : " hidden md:block  md:w-16 p-3"
          }`}>
        <button
          className=" block md:hidden text-white text-2xl  mb-6 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}>
          <CgCloseR />
        </button>
        {isOpen && (
          <div className="mb-6 border-b border-gray-200 pb-4">
            <h1 className="text-3xl font-semibold">Dashboard</h1>
          </div>
        )}
        <div className="flex flex-col gap-6">
          {
            filteredLinks.map((item, index) => (
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
