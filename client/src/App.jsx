import React, { Component } from 'react'
import "./App.css"
import { Switch, Route, Redirect } from 'react-router-dom'
import { verifyUser } from './services/user'
import Welcome from './components/Welcome'
import LandingPage from "./components/LandingPage"
import SignIn from './components/SignIn'
import StoreFront from './components/StoreFront/StoreFront'
import SignOut from './components/SignOut'
import ProductCreate from './components/ProductCreate'
import ProductDetail from "./components/ProductDetail";
import SignUp from './components/SignUp'
import EditProduct from './components/EditProduct';

import Facebook from './components/Facebook';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      searchProducts: null,
    };
  }

  async componentDidMount() {
    const user = await verifyUser();
    if (user) {
      this.setState(user);
    }
  }

  setUser = (user) => this.setState({ user });

  setSearchProducts = (searchProducts) => this.setState({ searchProducts });

  clearUser = () => this.setState({ user: null });

  render() {
    const { setUser, clearUser } = this;
    const { user } = this.state;

    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
          <Route exact path="/welcome" render={props => <Welcome setUser={setUser} history={props.history} />} />
          <Route exact path="/sign-up" render={props => <SignUp setUser={setUser} history={props.history} />} />
          <Route exact path="/sign-in" render={routerProps => <SignIn setUser={setUser} history={routerProps.history} />} />
          <Route exact path="/sign-out" render={props => <SignOut user={user} clearUser={clearUser} history={props.history} />} />
          <Route exact path="/costco" render={() => <StoreFront user={user} setSearchProducts={this.setSearchProducts} searchProducts={this.state.searchProducts} />} />
          <Route exact path="/add-product" render={() => user ? <ProductCreate user={user} /> : <Redirect to="/costco" />} />
          <Route exact path="/costco/:id" render={props => user ? <ProductDetail {...props} history={props.history} user={user} /> : <Redirect to="/costco" />} />
          <Route exact path="/costco/:id/edit" render={props => <EditProduct {...props} user={user} />} />

          <Route exact path="/Facebook" render={() => <Facebook />} />


        </Switch>
      </div>
    )
  }
}
