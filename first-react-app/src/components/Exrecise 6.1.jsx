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

class Card extends React.Component {
  render() {
    return (
      <div>
      <div>
       <img className='img' src={this.props.img} ></img>
       <h1>{this.props.title}</h1>
       <p>{this.props.description}</p>
         <div>
           <button>{this.props.share}</button>
           <button>{this.props.explore}</button>
         </div>
      </div>
    </div>
    )
  }
}