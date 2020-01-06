import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shoppage/shoppage';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/sin-in-sign-up/sin-in-sign-up.component';
import {auth} from './firebase/firebase.utils';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      currentUser: null
    }
    

  }

   unsubscribedFromAuth = null;

  componentDidMount(){
   this.unsubscribedFromAuth= auth.onAuthStateChanged(user =>{
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount(){
     this.unsubscribedFromAuth();
  }

  render(){
    return(
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/shop" component={ShopPage}></Route>
            <Route exact path="/signin" component={SignInAndSignUpPage}/>
        </Switch>
    </div>
    )
  }
}

export default App;
