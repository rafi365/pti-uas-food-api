import React from 'react';

class Header extends React.Component {
  render() {
    return (
        <div className="container">
        <nav className="navbar">
          <ol>
            <ul className="nav">Home</ul>
            <ul className="nav">Food</ul>
            <ul className="nav">About</ul>
          </ol>
        </nav>
      </div>
    );
  }
}

export default Header;
