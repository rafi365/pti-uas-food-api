import React from 'react';
import Header from './Header';
import Recipes from './Recipes';
import axios from 'axios';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CameraIcon from '@material-ui/icons/RestaurantMenu';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
const API_KEY = 'eb81175a05fff5ef9e309ba4db2046d5';
const API_ID = '7850d07c';
const classes = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                FOODIES FOR GROUPIES
              </Typography>
              <IconButton aria-label="search" color="inherit">
                <SearchIcon />
              </IconButton>
              <IconButton aria-label="display more actions" edge="end" color="inherit">
                <MoreIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
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
              <div>
                <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
                {this.state.data && this.state.data.hits.map(data => {
                return(
                  <Recipes 
                  recipe={data.recipe}
                  />
                );
            })}
            </Grid>
        </Container>
            </div>
        }
        </div>
      );
  }
}

export default App;