import React from 'react';

class Header extends React.Component {
  render() {
    return (
        <div className="container">
        <nav className="navbar">
          <ol>
            <ul className="nav"><a href="#">Home</a></ul>
            <ul className="nav"><a href="#">Food</a></ul>
            <ul className="nav"><a href="#">About</a></ul>
          </ol>
        </nav>
      </div>
    );
  }
}

export default Header;
