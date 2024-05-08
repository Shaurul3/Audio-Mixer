import React, { useState } from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './pages/home'
import {LocalAudio} from './pages/localAudio'
import {Oscilator} from './pages/oscilator'
import {About} from './pages/about'
import { Layout } from './components/Layout';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route element={<Layout/>}>          
          <Route path="/" element={<Home/>}/>
          <Route path="/localAudio" element={<LocalAudio/>}/>
          <Route path="/oscilator" element={<Oscilator/>}/>
          <Route path="/about" element={<About/>}/></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
