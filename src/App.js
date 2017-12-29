import React, { Component } from 'react';
import './styles/App.css';
import {
	BrowserRouter as Router,
} from 'react-router-dom';
import Routes from './routes';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <Router>
				<div>
				<Header/>
			 	{ Routes }
		 	  </div>
	 	</Router>
    );
  }
}

export default App;
