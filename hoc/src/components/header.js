import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  authButton() {
    return (<button className="btn btn-primary">Sign In</button>);
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            { this.authButton()}
          </li>
        </ul>
      </nav>
    );
  }
}
