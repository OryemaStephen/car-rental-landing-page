import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbars from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Fleet from "./Components/Fleet";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  return (
    <Router>
      <Navbars />
      <Routes>
        <Route path="/" element={
          <>
              <Home />
              <Fleet />
              <About />
              <Contact />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
