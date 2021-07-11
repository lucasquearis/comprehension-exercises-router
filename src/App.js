import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './components/About';
import Users from './components/Users';
import StrictAcess from './StrictAcess';

class App extends Component {
  render() {
    const user = { username: 'jhon', password: 1234 }
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/users/:id" render={(props)=> <Users {...props}greetingsMessage="Good Morning" />} />
          <Route path="/strict-acess" render={(props) => <StrictAcess { ...props } user={ user } />} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
