import React from 'react';
import Hesaplama from "./Hesaplama";


import './App.css';

function App() {
  const currentDate = Date;
  return (
    <div className="App">
      <div className="App-header">
        <div className="Round-person-1">
        </div>
        <h4>Hakan Sandal</h4>
        <i className="fas fa-heart fa-3x" style={{color:"red"}}></i>
        <div className="Round-person-2">
        </div>
        <h4>Betül Yeşidağ</h4>
        <h2>--- Bugüne kadar ---</h2>
        <Hesaplama />


    </div>
    </div>
  );
}

export default App;
