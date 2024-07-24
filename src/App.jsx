import React from 'react'
import Header from './components/Header/Header';
import { Routes,Route } from 'react-router-dom';
import { About } from './components/About/About';
import Home from './components/pages/Home/Home';
import Footer from './components/Footer/Footer';
import Cars from './components/Cars/Cars';
import Reservation from './components/pages/Reservation/Reservation';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/cars' element={<Cars/>}/>
      <Route path='/reservation' element={<Reservation/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
