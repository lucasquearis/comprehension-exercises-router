import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/users">Users</Link>
        </div>
        <div>
          <Link to="/strict-acess">Acesso Restrito</Link>
        </div>
        <h2>Home</h2>
        <p> My awesome Home component </p>
      </div>
    );
  }
}

export default Home;
