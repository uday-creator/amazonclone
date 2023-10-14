import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Payments from './Payments'
import Login from './Login';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


//Establishing connection with extrenal stripe api

const promise = loadStripe(
  "pk_test_51NHkpoSCfg63Z0xcDy5Mrvv8Of7ph4mIMEnMNtncPZKFn4Yq8JPVLAPzjd0M4Cfis09gVnRJnF3DCD6kRFwA6vNz00vcdX5Et4"
);


function App() {






  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app component loads....
    auth.onAuthStateChanged(authUser => {
      console.log("the user is ::>>> ", authUser)

      if (authUser) {
        console.log("going to reducer")
        dispatch({
          type: "SET_USER",
          user: authUser
        })

      }
      else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })

  }, [])


  return (

    //We have to wrap the entire components in the router
    <Router>
      <div className="app">

        {/*Here switch works as a case hitter*/}

        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payments">
            <Header />
            <Elements stripe={promise}>
              <Payments />
            </Elements>
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          {/* Always put the home router at the end 
        so that by default the website route to the home page */}


          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
