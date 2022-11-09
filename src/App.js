import './App.css';
import Navbar from './Components/NavBar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('dark');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
    }
    else{
      setMode('light'); 
    }

  }
  return (
    <>
    <Navbar title="Text Assistant" mode={mode} aboutText="About" toggleMode={toggleMode} />
    <div className="container my-3">
      <TextForm heading  ="Enter Your Text"/>          
    </div>
    </>
  );
}

export default App;
