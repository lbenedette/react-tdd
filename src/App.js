import React from 'react';
import './App.css';
import { HelloWorld } from './Components/HelloWorld/HelloWorld';

function App() {
  return (
    <div className="App">
      {/* <span>Hello World</span> */}
      <HelloWorld name='Rebeca'></HelloWorld>
    </div>
  );
}

export default App;
