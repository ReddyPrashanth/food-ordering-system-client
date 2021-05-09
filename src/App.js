import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import SectionOne from './components/home/SectionOne';
import Navbar from './components/shared/Navbar';
import Menu from './components/home/Menu';
import Footer from './components/shared/Footer';

const store = configureStore();

class App extends Component {
  render() { 
    return ( 
      <Provider store={store}>
        <React.Fragment>
          <Navbar />
          <SectionOne />
          <Menu />
          <Footer />
        </React.Fragment>
      </Provider>
    );
  }
}
 
export default App;

