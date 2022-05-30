import axios from 'axios'
import {useState, useEffect } from 'react'


function Exrecise192() {

  const [countries,setCountries] = useState({res: [] })
  const [search,setSearch] = useState({input: ''})
  
  useEffect(()=>{getSearch()},[])
  
  async function getSearch() {
    try{
      const {data} = await axios.get(`https://restcountries.com/v3.1/all`)
      console.log(data)
      setCountries({res: data})
    } catch (e){
      console.log(e);
    }
  }
  function insertCountries(){
    return countries.res.map((country,idx)=>{
      return <div key={idx}>{country.name.common}</div>
    })
  }
  useEffect(()=>{filterSearch()},[search])

   function filterSearch() {
    console.log(search.input)
    const newRes = countries.res.filter(country=> country.name.common.includes(search.input));
    setCountries({res: newRes})
  }
  return ( 
    <div>
      <input onChange={(e)=>{setSearch({input: e.target.value})}}/>
      <div>
        {insertCountries()}
      </div>
    </div>
   );
}

export default Exrecise192;