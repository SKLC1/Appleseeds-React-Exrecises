import axios from 'axios'
import {useState, useEffect } from 'react'

function Exrecise193() {

  const [search,setSearch] = useState({query: 'hooks'})
  const [res,setRes] = useState({ hits: [] })
  
  useEffect(()=>{getSearch()},[])
  
  async function getSearch() {
    try{
      const {data} = await axios.get(`https://hn.algolia.com/api/v1/search?query=${search.query}`)
      console.log(data)
      setRes({hits: data.hits})
    } catch (e){
      console.log(e);
    }
  }
  function getResults(){
    getSearch()
  }
  function insertResults(){
    return res.hits.map(hit=>{
      return <a href={hit.url}>{hit.title}</a>
    })
  }
  return ( 
    <div>
      <input onChange={(e)=>setSearch({query: e.target.value})}/>
      <button onClick={()=>getResults()}>Search</button>
      <div>
         {res.hits?insertResults():'loading'}
      </div>
    </div>
   );
}

export default Exrecise193;