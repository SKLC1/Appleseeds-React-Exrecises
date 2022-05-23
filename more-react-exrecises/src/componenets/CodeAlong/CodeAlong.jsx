import React from "react";
import axios from 'axios'
import youtube from './youtube'

class CodeAlong extends React.Component{
  constructor(){
    super()
  }
  onTermSubmit =(term)=> {
    youtube.get('/search', {
      params: {
        q: term,
      }
    })
  }

  render() {
    return(
      <div>
        <div className="ui container"><SearchBar  onFormSubmit={this.onTermSubmit}/></div>
      </div>
    )
  }
}

class SearchBar extends React.Component{
  state = {term: ''};
  
  onInputChange=(e)=>{
    this.setState({term:e.target.value})
  }
  formSubmit=(e)=>{
    e.preventDefault();
    // to do call from parent\
    this.props.onFormSubmit(this.state.term)
  }
  render() {
    return(
      <div>
        <div className="search-bar ui segment">
          <form onSubmit={this.formSubmit} className="ui form">
            <div className="field">
              <label>Video Search</label>
              <input type="text"
              value={this.state.term} 
              onChange={this.onInputChange}></input>
            </div>
          </form>
        </div>
      </div>
    )
  }
}


export default CodeAlong