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

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  async componentDidMount() {
    const user = await verifyUser();
    if (user) {
      this.setState(user);
    }
  }

  setUser = (user) => this.setState({ user });

  clearUser = () => this.setState({ user: null });

  render() {
    const { setUser, clearUser } = this;
    const { user } = this.state;
    console.log("In App page", user);


    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
          <Route exact path="/welcome" render={props => <Welcome setUser={setUser} history={props.history} />} />
          <Route exact path="/sign-up" render={props => <SignUp setUser={setUser} history={props.history} />} />
          <Route exact path="/sign-in" render={routerProps => <SignIn setUser={setUser} history={routerProps.history} />} />
          <Route exact path="/sign-out" render={props => <SignOut user={user} clearUser={clearUser} history={props.history} />} />
          <Route exact path="/costco" render={() => <StoreFront user={user} />} />
          <Route exact path="/" render={() => <StoreFront user={user} />} />
          <Route exact path="/add-product" render={() => user ? <ProductCreate user={user} /> : <Redirect to="/costco" />} />
          <Route
            exact
            path="/costco/:id"
            render={(props) => (
              <ProductDetail {...props} history={props.history} user={user} />
            )}
          />
          } />
    </Switch>
      </div>
    )
  }
}
