import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
    <div className='this is class' data-atrr='this is attribute'>
      hello  from app component
      <a href=''>Click me</a>
    </div>
    )}
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


