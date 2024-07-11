import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbars from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Fleet from "./Components/Fleet";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { useEffect, useState } from 'react';
import Footer from './Components/Footer';

function App() {
  const [cars, setCars] = useState([])

    useEffect(()=>{
        fetch('/data.json')
        .then((response)=>response.json())
        .then((data)=>{
          setCars(data);
        })
        .catch((error)=>console.log(error))
    },[]);

  return (
    <Router>
      <Navbars />
      <Routes>
        <Route path="/" element={
          <>
              <Home />
              <Fleet cars={cars}/>
              <About />
              <Contact />
              <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
