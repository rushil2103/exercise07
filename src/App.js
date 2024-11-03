import React from 'react';
import './App.css';
import logo from './logo.svg';
import Greet from './components/Greet';
import Student from './components/Student';

function App() {
  const student = {
    id: 101413662,
    name: "Rushil Tamakuwala",
    college: "George Brown College, Toronto",
  };

  return (
    <div className="App" style={{ backgroundColor: "white" }}> 
      <header className="App-header">
        <React.Fragment>
          <div style={{ textAlign: "center" }}>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <Greet />
          <Student student={student} />
        </React.Fragment>
      </header>
    </div>
  );
}

export default App;
