import { FaAmbulance } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const HeroDetails = () => {

    const details = [
        {
            title:'Hotline',
            number:'+1 234 567 8901',
            icon: <FiPhone />,
        },
        {
            title:'Ambulance',
            number: '+1 234 567 8901',
            icon:<FaAmbulance />
        },
        {
            title:'Location',
            number: 'Lebanon, Beirut',
            icon:<IoLocationOutline />
        }
    ]

  return (
    <div className='bg-transparent w-full min-h-36 lg:h-36 '>
      <div className="w-3/4 h-full mx-auto bg-white rounded-lg shadow-2xl">
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center  gap-5 h-full ">
      {
        details.map((item , index) => (
        <div key={index} className="flex justify-center  items-center gap-5 my-4" >
           <div className="bg-secondary text-white text-xl h-10 w-10 rounded-full flex items-center justify-center">{item.icon}</div>
          <div >
            <h1>{item.title}</h1>
            <p className="text-gray-400">{item.number}</p>
          </div>
        </div>
      ))
      
      }

      </div>
      </div>
    </div>
  )
}

export default HeroDetails