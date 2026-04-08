import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './component/Login'
import { Route, Routes, useLocation } from 'react-router'
import Signup from './component/Signup'

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation()

  return (
    <>
      {location.pathname==="/" && <Login />}
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/Signup' element={<Signup />}/>
      </Routes>
    </>
  )
}

export default App
