import React from 'react';
import {  Switch, Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './App.css';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'

import Header from './components/header/header.component'
import { selectCurrentUser } from './redux/user/user.selectors'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'

import { selectCollectionsForPreview } from './redux/shop/shop.selectors'

class App extends React.Component {

  unsuscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser, collectionsArray} = this.props

    // apps listening to auth state changes on firebase backend
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth); 

        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      else{
        setCurrentUser(userAuth);
        // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})))
      }
      
    })
  }

  componentWillUnmount(){
    this.unsuscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route 
            exact 
            path="/signin" 
            render={() => 
                this.props.currentUser ? (
                  <Redirect to="/"/>
                ) : (
                  <SignInAndSignUpPage />
                )
              }   
            />
        </Switch>
      </div>
    );
  }
}
const mapStateToPropps =  createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
})

const mapDispatchToPropps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToPropps, mapDispatchToPropps)(App);
