import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  const [isToggled, setIsToggled] = useState(false)
  return(
    <div className='App'>
        <button onClick={()=> setIsToggled(!isToggled)}>
        toggle
        </button>
        { isToggled && <YellowBox></YellowBox> }
      </div>
      )
    }
function YellowBox() {
  return(
   <div>Hide And Seek Component</div>
  )
}
    
export default App 