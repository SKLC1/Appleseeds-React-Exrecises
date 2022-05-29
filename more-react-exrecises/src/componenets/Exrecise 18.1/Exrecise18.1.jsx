import React, { useState} from "react";

function Exrecise181() {
  return ( 
    <>
      <TextComp max={5} text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."/>
    </>
   )
}

function TextComp({max, text}) {
  const [ isExpanded, setIsExpanded ] = useState(false)
 
  function insetText(){
    const textArr = text.split(" ");
    if(textArr.length > max){
      const shorted = textArr.splice(0, max).join(' ').toString()
      if (!isExpanded) { 
        return  <div>
        <div>
          {shorted}</div> <span onClick={()=>toggleLearnMore()}>Learn more</span>
        </div>
      } else { 
        return  <div>
        <div>
          {text}</div> <span onClick={()=>toggleLearnMore()}>Show less</span>
        </div>
      }
    }
  }
  function toggleLearnMore(){
    if (!isExpanded) {
      setIsExpanded(true)
    } else {
      setIsExpanded(false)
    }
  }
  return ( 
   <div>
     {insetText()}
   </div>
  );
}
export default Exrecise181;

