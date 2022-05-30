import React, { useState } from 'react';
import axios  from 'axios';

class Exrecise194 extends React.Component{
  render() {
    return(
      <>
       <GetJoke/>
      </>
    )
  }
}

function GetJoke (){
  const [jokesArrRes,setJokesArrRes]= useState({res: []})
  const [joke,setJoke]= useState({randJoke: ''})
  
  function appendCategoryBtn() {
     axios.get('https://api.chucknorris.io/jokes/categories').then((response)=>{
      const jokesArr = response.data;
      console.log(jokesArr)
      setJokesArrRes({res: jokesArr})
    })
  }
  function getRandJoke (category) {
    axios.get(`https://api.chucknorris.io/jokes/random`).then((response)=>{
      setJoke({randJoke: response.data.value})
    })
  }
  function getCateJoke (category) {
    axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`).then((response)=>{
      setJoke({randJoke: response.data.value})
    })
  }
    return(
      <>
        <div>
         <button onClick={()=>{getRandJoke()}}>Get random joke</button>
          <div>{joke.randJoke}</div>
          <button onClick={()=>appendCategoryBtn()}>Get more categories</button>
          <div>{jokesArrRes.res.map((jokeCat,idx)=>{
            return <button key={idx} onClick={()=>getCateJoke(jokeCat)}>{jokeCat}</button>
          })}</div>
        </div>
      </>
    )
}
export default Exrecise194