import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import{BrowserRouter,Routes,Route}from "react-router-dom"
import Success from './succes';
import Fail from './fail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}></Route>
    <Route path='/success' element={<Success/>}></Route>
    <Route path='/fail' element={<Fail/>}></Route>
  </Routes>
    </BrowserRouter>
 
);


