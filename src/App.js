import React from 'react'
import './App.css';
import navbar from './navbar';
import imagegrid from './image-grid';
import headingpara from './headingpara';
import card from './card';
function App() {
  return (
    <div className="App">
      <>{navbar()}</>
      <>{imagegrid()}</>
      <>{headingpara()}</>
      <>{card()}</>
    </div>
  );
}

export default App;
