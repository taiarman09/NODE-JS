import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './component/Login'
import Signup from './component/Signup'

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation()

  return (
    <>
      {location.pathname==="/" && <Login />}
      <Routes>
        <Route path='/Login'  element={<Login />} />
        <Route path='/Signup' element={<Signup />}/>
      </Routes>
    </>
  )
}

export default App
