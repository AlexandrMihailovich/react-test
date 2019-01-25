import React, { Component } from 'react';
import Main from './components/Main'
import Large from './components/large';
import SelectSize from './components/SelectSize';
import { Switch, Route } from 'react-router-dom';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    return (
        <div id="app">
                <main>
                    <Switch>
                        <Route exact path='/' component={SelectSize}/>
                        <Route path='/small'
                               component={Main} />
                        <Route exact path='/large'
                               component={Large} />
                        <Route path='/large/:number'
                               component={Large} />
                    </Switch>
                </main>
        </div>
    );
  }
}

export default App;
