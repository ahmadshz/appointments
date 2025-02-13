import { IoLocationOutline, IoSearchOutline } from "react-icons/io5";
import img from '../../../assets/hero_img.png'
import HeroDetails from "./HeroDetails";

const Hero = () => {
    return (
        <div className='h-screen relative'>
            <div className='container flex items-center justify-center lg:justify-normal h-full relative'>
                <div className="w-full md:w-2/4 text-center lg:text-start">
                    <h1 className="text-[30px]  lg:text-[50px] font-bold  ">
                        <span className="text-[#234A6B] ">Get Expert </span>
                        <span className="text-primary">Medical Consultation!</span>
                    </h1>
                    <p className=" text-[#5E83A3] mt-7 w-full lg:w-2/3">We are committed to providing you with the best medical
                        and healthcare services to help you live healthier and
                        happier.</p>
                    <div className="w-6/12 lg:w-10/12 flex items-center justify-between rounded-lg shadow-lg mx-auto lg:mx-0 mt-8 bg-white h-14 px-4">
                        <div className="flex justify-between gap-4 items-center w-2/4">
                            <IoLocationOutline  size={25} />
                            <p className="hidden lg:block">Search Doctors in your location</p>
                        </div>
                        <div className="bg-primary text-white h-3/4 px-10   rounded-lg flex items-center justify-center">
                            <IoSearchOutline size={25} />
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block absolute bottom-0 right-0 w-2/4 ">
                    <img src={img} alt="hero" className="h-full w-full" />
                </div>


            </div>
            <div className="  absolute -bottom-32 md:-bottom-16 left-0 w-full">
                <HeroDetails />
            </div>
        </div>
    )
}

export default Hero