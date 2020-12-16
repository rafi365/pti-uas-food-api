import React,{Component, Fragment} from 'react';
import Header from './Header';
import Recipes from './Recipes';
import axios from 'axios';
import './App.css'
const API_KEY = '9b904d703fa0d46a88ce1ac63f29f498';
    const API_ID = '4e9f05eb';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      searchinput:'',
      SearchEmpty: true,
    };
  }

  handleSearch(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    this.setState({
      searchinput: inputValue,
      SearchEmpty: isEmpty,
    });
  }

  getsearch(){
    let query;
    query = this.state.searchinput;
    axios.get(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
        .then(result => {
            this.setState({ 
                data: result.data
            })
            console.log(this.state.data.hits)
        })
        .catch(console.error)
  }
  render() {
      // Render real UI ...
      return (
        <div className="App">
        <Header/>
        <header className="App-header">
          <h1>FOOD DATABASE</h1>
  
          <p>Healthy Food, Healthy Life.</p>
          <input
            value={this.state.searchinput}
            onChange={(event) => {this.handleSearch(event)}}
          />
          <input
          type='button'
          value='Search'
          onClick={()=>{this.getsearch()}}
        />
        </header>
        
        <div className="main">
        </div>
        { this.state && this.state.data &&
              <div>{this.state.data && this.state.data.hits.map(data => {
                return(
                  <Recipes 
                  recipe={data.recipe}
                  />
                );
            })}</div>
        }
        </div>
      );
  }
}

export default App;