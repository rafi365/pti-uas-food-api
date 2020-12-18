import React from 'react';
import Recipes from './Recipes';
import axios from 'axios';
import './App.css';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PaperTitle from './Paper';



const API_KEY = 'eb81175a05fff5ef9e309ba4db2046d5';
const API_ID = '7850d07c';
const classes = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));


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
      
      return (
        <div className="App">
          <br/>
          <br/>
          <br/>
          <PaperTitle />
          <form className={classes.root} noValidate autoComplete="off" value={this.state.searchinput} onChange={(event) => {this.handleSearch(event)}}>
          
            <TextField id="outlined-basic" label="Search Recipes" variant="outlined" />
          </form>
          <IconButton aria-label="search" color="inherit" onClick={()=>{this.getsearch()}}>
            Search
            <SearchIcon />
          </IconButton>
          
        { this.state && this.state.data &&
          <div>
          <Grid item xs={12}>
        <Grid container justify="justify" spacing="1">
        {this.state.data && this.state.data.hits.map((data,index) => {
                  
                  return(
                    <Grid key={index} item>
                    <Recipes 
                    recipe={data.recipe}
                    />
                    </Grid>
                  );
                  
              })}
        </Grid>
      </Grid>
          </div>
        }
        </div>
      );
  }
}

export default App;