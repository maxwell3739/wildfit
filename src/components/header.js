import React from 'react';

import { Link } from 'react-router-dom';

import { ButtonToolbar,
         ButtonGroup,
         Glyphicon,
         DropdownButton,
         MenuItem } from 'react-bootstrap';

class Header extends React.Component {
  render() {
      return (
        <div className="navbar">
          <div className="corner-logo">Wildfit</div>
          <Link to={'/home'} className="nav-item-link"><div className="nav-item">Home</div></Link>
          <Link to={'/about'} className="nav-item-link"><div className="nav-item">About</div></Link>
          <Link to={'/payments'} className="nav-item-link"><div className="nav-item">Join Now</div></Link>
        </div>
      )
    }
  }

export default Header;
