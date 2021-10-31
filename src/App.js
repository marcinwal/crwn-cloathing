import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions';

// const App = ({ checkUserSession, currentUser }) => {
const App = () => {  

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch(); //this function is reassigned every single time component starts; that is why useEffect is with .... [dispatch] not [checkUserSession]
  // console.log(currentUser);
  // const isHidden = useSelector((state) => state.isHidden);
  // console.log(isHidden);

  useEffect(()=>{
    dispatch(checkUserSession());
  },[dispatch]); //dependency that reruns once it is changed

  // unsubscribeFromAuth = null;

  // useEffect(() => {
  //   checkUserSession()
  // }, [checkUserSession]);

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route 
          exact 
          path='/signin' 
          render={() => 
            currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInAndSignUpPage />
            )
          } 
        />
      </Switch>
    </div>
  );
};

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser
// });

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser
// });

// const mapDispatchToProps = dispatch => ({
//   checkUserSession: () => dispatch(checkUserSession())
// });


// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);

export default App;