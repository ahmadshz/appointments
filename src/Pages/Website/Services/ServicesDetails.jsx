import { data } from "../../../1-data/dataServices"

const ServicesDetails = () => {
  return (
   <div className="grid grid-cols-2 md:grid-cols-3   gap-5 md:gap-8 lg:gap-14 ">
   
             {
               data.map((item, index) => (
                 <div key={index}
                   className={`bg-white ${index === 1 ? 'bg-blue-500 text-white' : 'bg-white '}  shadow text-center px-3 py-5 md:p-8 w-full  xl:w-3/5 mx-auto rounded-3xl`}
                 >
                   <div className="p-5 w-fit mx-auto rounded-3xl bg-[#ECF6FF]"> <img className="mx-auto w-7 md:w-10 h-7 md:h-10" src={item.icon} /></div>
                   <h1 className="text-md md:text-xl font-medium my-4">{item.title}</h1>
                   <p className={`${index === 1 ? 'text-slate-200' : 'text-gray-400'} text-sm md:text-md`}>{item.desc}</p>
   
                 </div>
               ))
             }
           </div>
  )
}

export default ServicesDetails
