import React from 'react';
import Food_card from './Food_Card';
import axios from 'axios';
import './App.css';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PaperFoodAPI from './PaperFoodAPI';



const API_KEY = '98e50b30c26dfe2ef37bf297a3e3c659';
const API_ID = 'b3f93b3a';
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
    axios.get(`https://api.edamam.com/api/food-database/v2/parser?ingr=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
        .then(result => {
            this.setState({ 
                data: result.data
            })
            // console.log(this.state.data.hints)
        })
        .catch(console.error)
  }

  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.getsearch();
    }
  }
  render() {
      
      return (
        <div className="App">
          <br/>
          <br/>
          <br/>
          <PaperFoodAPI />
          <form className={classes.root} noValidate autoComplete="off" value={this.state.searchinput} onChange={(event) => {this.handleSearch(event)}}>
          
            <TextField id="outlined-basic" label="Search Food" variant="outlined" />
          </form>
          <IconButton aria-label="search" color="inherit" onClick={()=>{this.getsearch()}}>
            Search
            <SearchIcon />
          </IconButton>
          
        { this.state && this.state.data &&
          <div>
          <Grid item xs={12}>
        <Grid container justify="justify" spacing="1">
        {this.state.data && this.state.data.hints.map((data,index) => {
                  
                  return(
                    <Grid key={index} item>
                    <Food_card
                    foodie={data}
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