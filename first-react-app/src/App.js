import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0)
    return(
    <div>
      <button onClick={()=> setCount(count+1)}>counter</button>
      <div>{count}</div>
    </div>
    )
}
export default App 