import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Project from './Pages/Project';
import Service from './Pages/Service';
import Home from './Pages/Home';

const App = () => {
  
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element= {<Home/>}/>
                <Route path='/about' element= {<About/>}/>
                <Route path='/blog' element= {<Blog/>}/>
                <Route path='/contact' element= {<Contact/>}/>
                <Route path='/project' element= {<Project/>}/>
                <Route path='/service' element= {<Service/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;