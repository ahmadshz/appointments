import { Outlet } from "react-router-dom";
import SideBar from "../../Components/Dashboard/SideBar";
import TopBar from "../../Components/Dashboard/TopBar";
import { useState } from "react";

const Dashboard = () => {
  const [isOpen , setIsOpen] = useState(false)
  return (
    <div className="h-screen relative">
      <div className="">
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div className={`${isOpen ? 'md:w-[57%] lg:w-[67%] xl:w-[75%] 2xl:w-[82%]' : 'md:w-[89%] lg:w-[92%] xl:w-[94%]  2xl:w-[96%] '}   md:absolute md:right-3  p-2 duration-300`}>
        <div >
          <TopBar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div className=" py-14">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;