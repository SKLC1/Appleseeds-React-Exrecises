import imgColor from "./images/Adventure_Time_-_Title_card.png"
import imgGrey from "./images/Adventure_Time_-_Title_card-modified.png"
import { useEffect, useRef, useState } from 'react'

// function Exrecise213() {
//   const [image, setImage] = useState(imgGrey)
//   const inputRef = useRef()
  
  
//   return ( 
//     <div>
//       <img src={image} onMouseOver={()=>setImage(imgColor)} onMouseOut={()=>setImage(imgGrey)}></img>
//     </div>
//    );
// }
// export default Exrecise213;

// ? using useRef
function Exrecise213() {
  const [image, setImage] = useState(imgGrey)
  const inputRef = useRef()
  
  useEffect(()=>{
    inputRef.current.addEventListener('mouseover',changeImgColor)
    inputRef.current.addEventListener('mouseout',changeImgGrey)
  },[])
  
  function changeImgColor() {
    setImage(imgColor)
  }
  function changeImgGrey() {
    setImage(imgGrey)
  }

  return ( 
    <div>
      <img ref={inputRef} src={image}></img>
    </div>
   );
}
export default Exrecise213;