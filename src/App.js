import React from 'react';
import Head from './Components/Header'
import HeadBase from './Components/HeaderBase'
import Body from './Components/Body'
import './Css/App.css'

function App() {
  return (
    <div className="App">
        <Head />
        <HeadBase />
        <Body />
    </div>
  );
}

export default App;
