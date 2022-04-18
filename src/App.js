
import './App.css';
import react from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Navabar'
import ContactApp from './ContactApp';


function App() {
  return(
    <>
    <Router>
      <Navbar/>
     
      <Routes>
                <Route path="/contact" element={<ContactApp />} />
            </Routes>
      
      
    </Router>
    </>
  ) 
   
    

}

export default App;
