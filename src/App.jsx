import './App.css';
import Menu from './components/menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/projects' element={<Projects/>}/>          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
