import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Watched from './views/Watched';



export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Navbar />
        </header>

        <main className="container">
          <Switch>
            <Route exact path='/' render={() => <Home />} />
            <Route exact path='/watched' render={() => <Watched />} />
          </Switch>
        </main>

        <footer>

        </footer>
      </div>
    )
  }
}
