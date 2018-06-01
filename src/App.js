import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Board from './Containers/board/board'
import Login from './Containers/login/login'
import Scores from './Containers/scores/scores'
import NumberButtonContainer from './Containers/numberButtonContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch> 
          <Route exact path="/login" component={Login}/>
          <Route exact path="/" component={Board}/>
          <Route exact path="/scores" component={Scores}/>
        </Switch>
      </div>
    );
  }
}

export default App;