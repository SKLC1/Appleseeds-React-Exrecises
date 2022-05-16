class App extends React.Component {
  
  render() {
    const randomImage = ['https://picsum.photos/200/300','https://picsum.photos/200/300?greyscale','https://picsum.photos/200/300?blur']
    const randomText = ['title1','title2'];
    const description = ['some de','more text'];
  
    return(
      <div>
        <Card img={randomImage[0]} title={randomText[0]} description={description[0]}
        share="share" explore="explore"></Card>
        <Card img={randomImage[1]} title={randomText[0]} description={description[0]}
        share="share" explore="explore"></Card>
        <Card img={randomImage[2]} title={randomText[0]} description={description[0]}
        share="share" explore="explore"></Card>
      </div>
    )}
}

const Card = (props) => {
  return(
    <div>
      <div>
       <img src={props.img} ></img>
       <h1>{props.title}</h1>
       <p>{props.description}</p>
         <div>
           <button>{props.share}</button>
           <button>{props.explore}</button>
         </div>
      </div>
    </div>
  )
}
