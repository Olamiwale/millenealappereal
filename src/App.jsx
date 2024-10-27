import React,{useState, useEffect} from 'react'

import Navbar from './components/Navbar';

import Footer from './components/Footer';

import { Outlet } from 'react-router-dom';
import Spinner from './components/Spinner';

export default function App() {

  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 1000);

    
    return () => clearTimeout(timer);
  }, []);

 


  return (
    <>
    
      <Navbar />
      {loading ? (<Spinner />) : ( <Outlet  />)}
    
      <Footer />
    </>
  )
}
