import React, { useState } from 'react';
import './App.css';
import List from "./components/List.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <List />
    </>
  )
}

export default App;
