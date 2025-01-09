import React from 'react'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      

     {/* <Routes>
      <Route path='/' element={<Login />} />
     </Routes> */}

     <Login />

     

    </div>
  )
}

export default App
