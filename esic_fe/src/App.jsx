import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';

// Page Imports 
import { Home } from './Pages/Home/Home';
import { Blogs } from './Pages/Blogs/Blogs';

// Component Imports 
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
      <div className=' bg-background-150 h-screen text-white'>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blogs' element={<Blogs />} />
          </Routes>
        <Footer />
      </div>
  );
}

export default App;