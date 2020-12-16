import React,{Component, Fragment} from 'react';
import Header from './Header';
import Recipes from './Recipes';
import axios from 'axios';
const API_KEY = '9b904d703fa0d46a88ce1ac63f29f498';
    const API_ID = '4e9f05eb';
    const query = 'tomato'
    const url = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      externalData: null,
    };
  }
  componentDidMount(){
    axios.get(url)
        .then(result => {
            this.setState({ 
                data: result.data
            })
            console.log(this.state.data.hits)
        })
        .catch(console.error)
  }
  render() {
    if (this.state.data === null) {
      // Render loading state ...
      return(
        <p>loading....</p>
      );
    } else {
      // Render real UI ...
      return (
        <div className="App">
        <Header/>
        <header className="App-header">
          <h1>FOOD DATABASE</h1>
  
          <p>Healthy Food, Healthy Life.</p>
        </header>
        
        <div className="main">
        </div>
        
        {this.state.data.hits.map(data => {
                  return(
                    <Recipes 
                    recipe={data.recipe}
                    />
                  );
              })}
        </div>
      );
    }
  }
}

export default App;