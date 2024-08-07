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
      <div className=' bg-background-150 h-screen text-white'>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/blogs/:slug' element={<BlogPost />} />
          </Routes>
        <Footer />
        
        {/* <MarqueScroll className="bg-background-500" text={"E-SUMMIT The Festival "} angle={-2} /> */}
        {/* <MarqueScroll className="bg-background-500" text={"Events. "} angle={0} /> */}
        {/* <MarqueScroll className="bg-background-500" text={"Speakers. "} angle={0} /> */}
      </div>
  );
}

export default App;