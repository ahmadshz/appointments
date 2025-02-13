
const Appointments = () => {
  return (
    <div className="overflow-auto rounded-lg shadow-md">
                   <table className="min-w-max w-full border-collapse bg-white">
                       <thead>
                           <tr className="bg-secondary text-white">
                               <th className="p-3 text-left whitespace-nowrap">Id_Doctor</th>
                               <th className="p-3 text-left whitespace-nowrap">Name</th>
                               <th className="p-3 text-left whitespace-nowrap">Email</th>
                               <th className="p-3 text-left whitespace-nowrap">Role</th>
                               <th className="p-3 text-left whitespace-nowrap">Gender</th>
                               <th className="p-3 text-left whitespace-nowrap">Action</th>
                           </tr>
                       </thead>
                       <tbody>
                          
                       </tbody>
                   </table>
               </div>
  )
}

export default Appointments