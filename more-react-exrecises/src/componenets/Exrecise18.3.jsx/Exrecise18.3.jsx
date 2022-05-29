import React, { useState } from "react";

function Exrecise183() {
  const [sec, setSec] = useState(0)
  const [min, setMin] = useState(0)
  const [hr, setHr] = useState(0)
 
  
  function changeOthers(value, id){
    if (id === 'sec') {
      setSec(value)
      setMin(value/60)
      setHr(value/60/60)
    }
    if (id === 'min') {
      setSec(value*60)
      setMin(value)
      setHr(value/60)
    }
    if (id === 'hr') {
      setSec(value*60*60)
      setMin(value*60)
      setHr(value)
    }
    
  }

  return ( 
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <label>Sec</label>
      <input value={sec} id="sec" onChange={(e)=>changeOthers(e.target.value, e.target.id)}></input>
        <label>Min</label>
      <input value={min}  id="min" onChange={(e)=>changeOthers(e.target.value, e.target.id)}></input>
        <label>Hr</label>
      <input value={hr}  id="hr" onChange={(e)=>changeOthers(e.target.value, e.target.id)}></input>
    </div>
   );
}

export default Exrecise183;