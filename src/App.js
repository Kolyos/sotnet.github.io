import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/header';
import MainContent from './components/MainContent/MainContent.jsx';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
        <Routes>
          <Route path='/maincontent' element={<MainContent/>} />
          <Route path='/dialog/*' element={<Dialogs/>} />
        </Routes>
    </div >
  )
}

export default App;
