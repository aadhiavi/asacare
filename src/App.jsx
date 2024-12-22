import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import ScrollgToTop from './Components/Helpers/ScrollToTop';
function App() {
  return (

    <Router>
      <ScrollgToTop>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services/>} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      </ScrollgToTop>
    </Router>
  );
}

export default App;

