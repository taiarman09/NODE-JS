import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Admindashboard from './pages/Admindashboard'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to={"/admin-dashboard"} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin-dashboard' element={<Admindashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
