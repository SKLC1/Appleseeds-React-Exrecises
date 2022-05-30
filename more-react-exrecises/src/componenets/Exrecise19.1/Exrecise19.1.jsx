import axios from "axios";
import { useEffect, useState } from "react";

function Exrecise191() {
  const [movie,setMovie] = useState({movieData: {title: '', director: ''}})
  
  useEffect(()=>{getMovie()},[])
  
  async function getMovie() {
    const {data} = await axios.get('https://swapi.dev/api/films/2/')
    console.log(data)
    setMovie({movieData:data})
  }
  useEffect(()=>{insertMovie()},[movie])
  
  
  function insertMovie(){
    console.log(movie)
    return <div>{movie.movieData.title},{movie.movieData.director}</div>
  }
  return (
     <div>
      {movie.movieData?insertMovie():'loading'}
     </div> 
  );
}

export default Exrecise191;