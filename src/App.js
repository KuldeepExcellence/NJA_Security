import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Training from './Components/Training';
import Guarding from './Components/Guarding';
import Transportation from './Components/Transportation';

function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/training" element={<Training/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/guarding" element={<Guarding/>} />
        <Route path="/transportation" element={<Transportation/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
