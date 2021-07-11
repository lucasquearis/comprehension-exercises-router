import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class StrictAcess extends Component {
  render() {
    const { username, password } = this.props.user;
    if (username !== 'joao' || password !== 1234) {
      alert('Acesso Negado!')
      return <Redirect to='/' />
    }
    return(
      <h1>Welcome joao!</h1>
    );
  }
}

export default StrictAcess;