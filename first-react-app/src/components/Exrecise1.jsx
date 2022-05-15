import React from "react";


export class App extends React.Component {
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