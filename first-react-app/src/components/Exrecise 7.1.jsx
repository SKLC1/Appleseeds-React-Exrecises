

function App() {
  const [count, setCount] = useState(true)
    return(
    <div>
      <button onClick={()=> setCount(count+1)}>counter</button>
      <div>{count}</div>
    </div>
    )
}
export default App 