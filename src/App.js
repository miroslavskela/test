import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpComponent from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth} from './firebase/firebase.util';
import {createUserProfileDocument} from './firebase/firebase.util';

import './App.css';

class App extends React.Component {
  state = {
    currentUser:null
  }

  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      // this.setState({currentUser:user})
      createUserProfileDocument(user)
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  
  render() {
    return (
      <div className='App'>
       <Header currentUser={this.state.currentUser}/>
       <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route  path="/shop" component={ShopPage}/>
        <Route path='/signin' component={SignInSignUpComponent} />

         </Switch> 
      </div>
    );
  }
}

export default App;
