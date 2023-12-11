
import './App.css';
import React from 'react';
import Blue from './components/Blue';
import Red from './components/Red';
import Green from './components/Green';
import MainPage from './components/MainPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <h1>hello</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/flowers" element={<Blue />} />
        <Route path="/trees" element={<Green />} />
        <Route path="/cars" element={<Red />} />
      </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;

