import { FiMenu } from "react-icons/fi";

const TopBar = ({ setIsOpen, isOpen }) => {
  return (
    <div className="w-full h-fit py-3 z-11 px-5 rounded-xl flex justify-between items-center bg-secondary">
      <div className="flex items-center gap-4">
        <div className="text-white text-3xl font-medium">Ahmad</div>
        <button
          className=" text-white text-2xl focus:outline-none hover:text-gray-300 transition"
          onClick={() => setIsOpen(!isOpen)}
          >
          <FiMenu />
        </button>
      </div>

      <button
        className="bg-transparent text-white font-bold border-2 border-white rounded-md py-2 px-6 
                   hover:bg-primary hover:border-primary duration-300 cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default TopBar;
