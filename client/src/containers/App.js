import React, { Component } from 'react';
import {BrowserRouter  as Router,Switch,Route} from 'react-router-dom';

import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/projects" component={Projects} />
      </Router>
    );
  }
}

export default App;
