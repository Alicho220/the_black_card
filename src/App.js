import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import CardInfo from './components/CardInfo/CardInfo';
import SignUp from './components/SignUp/SignUp';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Vendors from './components/VendorsList/Vendors';

function App() {
  return (
    
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={CardInfo}/>
          <Route path='/sign-in' component={SignUp} />
          <Route path='/vendors' component={Vendors} />
         
          {/* <Route component={ErrorPage} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
