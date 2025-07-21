import { RiMenu4Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import HeaderMobile from "./HeaderMobile";
import { useState } from "react";

const Headers = () => {
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(!show);
  };

  return (
    <div className="w-full h-20 flex items-center fixed z-10 bg-[#ffffffae] backdrop-blur-xl shadow-lg">
      <div className="container flex justify-between items-center mx-auto  ">
        <Link
          to="/"
          className="text-4xl font-bold text-[#0086FF]"
          style={{ fontFamily: "Open Sauce Sans, sans-serif" }}
        >
          Doctor
        </Link>

        <div className="hidden lg:flex gap-10 h-full items-center">
          <Link to="/" className="font-medium text-xl hover:text-primary duration-300">
            Home
          </Link>
          <Link to="/about" className="font-medium text-xl hover:text-primary duration-300">
            About
          </Link>
          <Link to="/find-doctor" className="font-medium text-xl hover:text-primary duration-300">
            Find Doctor
          </Link>
          <Link to="/blog" className="font-medium text-xl hover:text-primary duration-300">
            Blog
          </Link>
          <Link to="/contact" className="font-medium text-xl hover:text-primary duration-300">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <Link
            to="/login"
            className="bg-transparent font-bold border-2 border-primary text-primary rounded-md py-3 px-8  
                                   hover:bg-primary hover:text-white duration-300 cursor-pointer"
          >
            LogIn
          </Link>

          <RiMenu4Line
            onClick={handleOpen}
            className="lg:hidden cursor-pointer"
            size={30}
          />
        </div>
      </div>

      {show && <HeaderMobile closeMenu={handleOpen} />}
    </div>
  );
};

export default Headers;
