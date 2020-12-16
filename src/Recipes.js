import React from 'react';

class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }
  
  render() {
    return (
      <div className=''>
        <div
          className=''>
          <p>{this.props.recipe.label}</p>
          <img src={this.props.recipe.image} alt="food"/>
        </div>
      </div>
    );
  }
}

export default Recipes;

