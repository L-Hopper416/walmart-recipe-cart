import React, { Component } from 'react';
import Navbar from "./components/navbar/navbar.jsx"
import { Route, Redirect, withRouter } from 'react-router-dom'
import Cart from "./pages/Cart"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Recipes from "./pages/Recipes"
import Ingredients from "./pages/Ingredients"
import "./utils/App.css"

const PrivateRoute = ({ component: Component, ...rest }) => (

  <Route {...rest} render={(props) => (
    rest.auth.auth
      ? <Component {...props} auth={rest.auth} />
      : <Redirect to={{
        pathname: '/login',
        from: props.location
      }} />
  )} />
)

class App extends Component {

  // loadCart = items => {
  //   API.loadCart(items)
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // };
  state = {
    username: "guest",
    auth: false,
  }

  login = from => {
    console.log(from)
    console.log(this)
    this.setState({ username: "john", auth: true }, () => {
      from ?
        this.props.history.push(from.pathname) :
        this.props.history.push("/landing")
    })
  }

  signout = () => this.setState({ username: "guest", auth: false }, () => this.props.history.push("/landing"))

  render() {

    const auth = {
      auth: this.state.auth,
      username: this.state.username
    }
    return (
      <div style = {{height: "100%"}}>
        <Navbar auth={auth} login={this.login.bind(this)} signout={this.signout.bind(this)} />

        <Route exact path="/landing"
          render={(routeProps) => (
            <Landing {...routeProps} auth={auth} />
          )} />

        <PrivateRoute
          exact path="/ingredients"
          component={Ingredients}
          auth={auth}
        />

        <PrivateRoute
          exact path="/recipes"
          component={Recipes}
          auth={auth}
        />

        <PrivateRoute
          exact path="/cart"
          component={Cart}
          auth={auth}
        />
        <Route exact path="/login" render={(routeProps) => (
          <Login {...routeProps} auth={auth} login={this.login.bind(this)} />
        )} />

        <Route exact path="/signup" render={(routeProps) => (
          <Signup {...routeProps} auth={auth} signup={this.signup.bind(this)} />
        )} />

        <Route exact path="/"
          render={(routeProps) => (
            <Landing {...routeProps} auth={auth} />
          )} />

      </div>
    )
  }
}

export default withRouter(App);
