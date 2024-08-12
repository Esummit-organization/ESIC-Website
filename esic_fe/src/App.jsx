import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';

// Page Imports 
import { Home } from './Pages/Home/Home';
import { Blogs } from './Pages/Blogs/Blogs';
import { BlogPost } from './Pages/Blogs/BlogPost'

// Component Imports 
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
      <div className='h-screen text-white bg-background-150'>
        <div className=''>
          <Navbar/> 
        </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/blogs/:slug' element={<BlogPost />} />
          </Routes>
        <Footer />
      </div>
  );
}

export default App;