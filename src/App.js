import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Navbar from './components/shared/Navbar';
import Home from './components/home';
import Login from './components/users/login';
import SignUp from './components/users/signup';
import NotFound from './components/shared/NotFound';

const store = configureStore();

class App extends Component {
  render() { 
    return ( 
      <Provider store={store}>
        <React.Fragment>
          <Navbar />
          <main>
            <Switch>
              <Route path="/home" component={Home}/>
              <Route path="/signin" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/not-found" component={NotFound} />
              <Redirect exact to="/home" from="/" />
              <Redirect to="/not-found" />
            </Switch>
          </main>
        </React.Fragment>
      </Provider>
    );
  }
}
 
export default App;

