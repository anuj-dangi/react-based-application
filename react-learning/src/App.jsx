import React from 'react';
import './App.css';
import Students from './components/Students.jsx';

function App() {

  return (
    <>
      <Students name="nuclear" age={22} isStudent={true}/>
      <Students />
    </>
  )
}

export default App;
