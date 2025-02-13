import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Auth/Login'
import Website from './Pages/Website/Website'
import Register from './Pages/Auth/Register'
import Dashboard from './Pages/Dashboard/Dashboard'
import Users from './Pages/Dashboard/Users/Users'
import UpdateUsers from './Pages/Dashboard/Users/UpdateUsers'
import Appointments from './Pages/Dashboard/Appointments/Appointments'
import AddAppointments from './Pages/Dashboard/Appointments/AddAppointments'

function App() {

  return (
    <div >
      <Routes>
          <Route path='/' element={<Website />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Register/>} />
          <Route path='/dashboard' element={<Dashboard/>} >
            <Route path='users' element={<Users/>}/> 
            <Route path='users/:id' element={<UpdateUsers/>}/> 
            <Route path='appointments' element={<Appointments/>}/> 
            <Route path='book-appointments' element={<AddAppointments/>}/> 
          </Route>
          
      </Routes>
    </div>
  )
}

export default App
