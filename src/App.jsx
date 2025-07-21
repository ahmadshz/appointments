import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Auth/Login'
import Website from './Pages/Website/Website'
import Register from './Pages/Auth/Register'
import Dashboard from './Pages/Dashboard/Dashboard'
import Users from './Pages/Dashboard/Users/Users'
import UpdateUsers from './Pages/Dashboard/Users/UpdateUsers'
import Appointments from './Pages/Dashboard/Appointments/Appointments'
import AddAppointments from './Pages/Dashboard/Appointments/AddAppointments'
import AppointmentsPatient from './Pages/Dashboard/Appointments/AppointmentsPatient'
import { RequireAuth } from './Pages/Auth/RequireAuth'
import { RequireBack } from './Pages/Auth/RequireBack'
import AboutUs from './Pages/Website/About_Us/AboutUs'
import Headers from './Components/Header/Headers'

function App() {

  return (
    <div >
    <Headers />
      <Routes>
        <Route path='/' element={<Website />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />

        <Route element={<RequireBack />}>
          <Route path='/dashboard' element={<Dashboard />} >
            <Route element={<RequireAuth allowRole={['admin']} />}>
              <Route path='users' element={<Users />} />
              <Route path='users/:id' element={<UpdateUsers />} />
              <Route path='appointments' element={<Appointments />} />
            </Route>

            <Route element={<RequireAuth allowRole={['patient']} />}>
              <Route path='appointments-patient' element={<AppointmentsPatient />} />
              <Route path='book-appointments' element={<AddAppointments />} />
            </Route>
            <Route element={<RequireAuth allowRole={['doctor']} />}>
              <Route path='appointments-doctor' element={<AppointmentsPatient />} />
            </Route>
          </Route>
        </Route>

      </Routes>
    </div>
  )
}

export default App
