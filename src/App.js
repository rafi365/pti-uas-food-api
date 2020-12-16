import React from 'react';
import Header from './Header';
import Recipes from './Recipes';
import axios from 'axios';

class App extends React.Component {

  render() {
    const API_KEY = '9b904d703fa0d46a88ce1ac63f29f498';
    const API_ID = '4e9f05eb';
    const query = 'tomato'
    const url = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    let result;
    let test = 'hello';
    axios.get(url)
  .then(function (response) {
    // handle success
    // console.log(response);
    result = response.data.hits;
    const he = this.teer(result);
    
  })
  .catch(function (error) {
    // handle error
    //console.log(error);
  })
  .then(function () {
    // always executed
    console.log(result);
  });

    return (
      <div className="App">
      <Header/>
      <header className="App-header">
        <h1>FOOD DATABASE</h1>

        <p>Healthy Food, Healthy Life.</p>

        
        <p>{test}</p>
      </header>
      
      <div className="main">
          {he}
      </div>
        
      </div>
    );
  }
}

export default App;