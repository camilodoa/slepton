import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header.js';
import Footer from './components/footer.js'
import Login from './pages/login.js';
import SignUp from './pages/signup.js';
import Home from './pages/home.js';

function App() {
  return (
    <div className="App">
      <Header/>

      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>

        <Route path='/login'>
          <Login/>
        </Route>

        <Route path='/signup'>
          <SignUp/>
        </Route>
      </Switch>
      
      <Footer/>
    </div>
  );
}

export default App;
