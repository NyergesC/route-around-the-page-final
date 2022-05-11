import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Contacts from './Contacts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contacts' element={<Contacts />}/>
    </Routes>
    
  </BrowserRouter>
);

