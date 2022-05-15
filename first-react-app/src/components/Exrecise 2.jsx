import React from "react";


class App extends React.Component {
  
  constructor() {
    super();
  }
  render() {
    const data = ["hello", "world"];
    const number1 = 5;
    const number2 =6;
    const string = 'I love React!'
    return(
      <div>
        <div>{data[0]} {data[1]}</div>
        <div>{number1} + {number2} = {number1+number2}</div>
        <div>The strings length is {string.length}</div>
      </div>
    )}
}