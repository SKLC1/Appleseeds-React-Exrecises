

function Exrecise192() {

  const [search,setSearch] = useState({query: 'hooks'})
  
  useEffect(()=>{getSearch()},[])
  
  async function getSearch() {
    try{
      const {data} = await axios.get(`https://hn.algolia.com/api/v1/search?query=${search.query}`)
      console.log(data)
    } catch (e){
      console.log(e);
    }
  }
  return ( 
    <div>
      <input/>
      <div>
        
      </div>
    </div>
   );
}

export default Exrecise192;