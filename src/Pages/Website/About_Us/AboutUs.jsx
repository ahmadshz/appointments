import img from '../../../assets/aboutUs.png'

const AboutUs = () => {
    return (
        <div className="min-h-screen container flex flex-col lg:flex-row justify-center  items-center gap-10  mt-44 mb-16 lg:mt-0 ">
            <div className='w-4/4 lg:w-2/4'>
                <img src={img} alt="" />
            </div>
            <div className='lg:w-2/4 '>
                <h1 className="text-primary font-medium text-xl">About Us</h1>
                <p className='text-2xl md:text-4xl text-[#234A6B] font-bold my-4 lg:w-6/6  xl:w-5/6'>World-Class Preventive,
                    Prescriptive & Curative
                    Medical Practices
                </p>
                <p className='text-[#5E83A3]'>Being in the healthcare sector, we consider it our paradigm duty
                    to ensure Safety of our patients, effectiveness of our treatments,
                    transparency in our practices, and absolute timely care.
                </p>
                <button className='bg-primary text-white px-10 py-3 rounded-lg mt-6 shadow-sm'>Contact Us</button>
            </div>

        </div>
    )
}

export default AboutUs
