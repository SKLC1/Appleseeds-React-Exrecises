import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import data from "./data.js";

class Ecommerce extends React.Component{
  
  render(){
    return(
      <div>
        <BrowserRouter>
            <Route exact path="/" component={Homepage}></Route>
            <Route exact path="/products" component={Products}></Route>
            <Route path="/products/:id" component={Item}></Route>
        </BrowserRouter>
      </div>
    )
  }
}
class Homepage extends React.Component {
  state = {  } 
  render() { 
    return (
      <div>
       <Header/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return(
      <div>
         <div> WELCOME TO OUR PAGE</div>
        <Link to='/products'>
          <h1>Products</h1>
        </Link>
      </div>
    )
  }
}

class Products extends React.Component {
  constructor() {
    super()
    this.state = { prodData: data }
  }
  componentDidMount(){
    console.log(this.state.prodData)
  }
  render() { 
    return (
      <div>
        <div>
          {this.state.prodData.map((product)=>{
            return <div key={product.id}>
           <Link to={`/products/${product.id}`}>{product.title}</Link>
            </div>
          })}
        </div>
      </div>
    )
  }
}
class Item extends React.Component {
  constructor(){
    super()
    this.state= {  prodData: data, isProd: false } 
  }
  getProduct=()=>{
    this.state.prodData.map((product)=>{
      if(this.props.match.params.id == product.id){
        this.setState({prod: product},()=>{
          console.log(this.prod);
        })
      }
    })
  }
  componentDidMount() {
    this.getProduct()
    console.log(this.state)
  }
  componentDidUpdate(){
    if (!this.state.isProd) {
      this.setState({isProd: true})
    }
  }
  render() { 
    return (
      <div>
        <div>{this.state.isProd?this.state.prod.title:'loading'}</div>
        <div>{this.state.isProd?this.state.prod.price:null}</div>
        <img src={`${this.state.isProd?this.state.prod.imageUrl:null}`} />
      </div>
    );
  }
}
export default Ecommerce
