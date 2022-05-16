import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  const [counter, refactor] = useState(0)
  const curColor = 'black'
  return(
    <div>
      <button onClick={()=>refactor(counter+1)}>+</button>
      <div style={counter>0?({color:'green'}):({color:'red'})}>{counter}</div> 
      <button onClick={()=>refactor(counter-1)}>-</button> 
    </div>
        )
    }
function red() {
  return(
   <div>Hide And Seek Component</div>
  )
}
    
export default App 