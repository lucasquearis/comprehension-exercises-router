import React, { Component } from 'react';
import { Route } from 'react-router-dom'

class StrictAcess extends Component {
  render() {
    const { user } = this.props;
    return(
      <Route exact path="/">
        { user.username === 'joao' && user.password === 1234 ? <h1>Welcome joao!</h1> : alert('Acesso Negado!') }
      </Route>
    );
  }
}

export default StrictAcess;