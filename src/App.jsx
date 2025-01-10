import React from 'react'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Navbar />
     <Routes>
       {/* <Route path='/' element={<Navbar />} /> */}
       <Route path='/login' element={<Login />} />
       <Route path='/' element={<Home />} />

     </Routes>

     

    </div>
  )
}

export default App
