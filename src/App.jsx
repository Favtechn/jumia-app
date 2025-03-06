import React from 'react'
import Navbar from '../src/Components/Navbar'
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import Footer from'./Components/Footer'
import Cart from './Pages/Cart.jsx'
import Contact from './Pages/Contact.jsx'
import Card from './Components/Card.jsx'
const App = () => {
  return (
    <Router>
    <div >
      <Navbar/> 
      <Routes>  
      <Route path='/cart' element={<Cart/>}  />
      <Route path='/contact' element={<Contact/>}/>
      
      </Routes> 
      <br/><br />
      <Card/>
      <Footer/>
    </div>
    </Router>
  )
}

export default App

