import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {
  
  constructor() {
    super();

  }
  render() {
    return(
      <div>
        <div className='box1' style={{backgroundColor: 'green'}}>
         <div className='box2' style={{backgroundColor: 'blue'}}>
          <div className='box3' style={{backgroundColor: 'pink'}}>
             <div className='box4' style={{backgroundColor: 'red'}}>asd</div>
             <div className='box4' style={{backgroundColor: 'red'}}>asd</div>
          </div>
         </div>
        </div>
      </div>
    )}
}

export default App;

