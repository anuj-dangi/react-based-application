import React, { useState } from 'react';
import './App.css';
import Conditional from './components/Conditional.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <button type="button" onClick={() => {setIsLoggedIn(!isLoggedIn)}}>{isLoggedIn ? "logout" : "login"}</button>
      <Conditional isLoggedIn={isLoggedIn} username="nuclear"/>
    </>
  )
}

export default App;
