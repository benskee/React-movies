import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Todos from './views/Todos';
import Blog from './views/Blog';
import Store from './views/Store';
import ShopSingle from './views/ShopSingle';
import Cart from './views/Cart';
import Movies from './views/Movies';
import Watched from './views/Watched';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    }
  }

  addItem = item => {
    this.setState({
      cart: this.state.cart.concat(item)
    })
  }

  removeItem = (item) => {
    let cart = [...this.state.cart];
    
      let index = cart.indexOf(item);

      if (index !== -1) {
        cart.splice(index, 1);

        this.setState({
          cart: cart
        })
      }
  }

  render() {
    return (
      <div>
        <header>
          <Navbar cart={this.state.cart} />
        </header>

        <main className="container">
          <Switch>
            <Route exact path='/' render={() => <Home />} />
            <Route exact path='/todos' render={() => <Todos />} />
            <Route exact path='/blog' render={() => <Blog />} />
            <Route exact path='/movies' render={() => <Movies />} />
            <Route exact path='/watched' render={() => <Watched />} />
            <Route exact path='/store' render={() => <Store cart={this.state.cart} addItem={this.addItem} />} />
            <Route exact path='/store/:id' render={({ match }) => <ShopSingle match={match} cart={this.state.cart} addItem={this.addItem} />} />
            <Route exact path='/cart' render={() => <Cart cart={this.state.cart} addItem={this.addItem} removeItem={this.removeItem} />} />
          </Switch>
        </main>

        <footer>

        </footer>
      </div>
    )
  }
}
