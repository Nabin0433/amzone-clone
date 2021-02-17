import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Payment from "./Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentVeryfication from "./PaymentVeryfication";
import Orders from "./Orders";



const promise = loadStripe(
  "pk_test_51IFik9JbjU63l4FU0brp9eTJAhybUrKFX6lzUxJD6Un1UVvJv2JfpNcHb51Evxri9P7WZE88dQEeiB3THZkjSvT000OHH3L9T3"
);
function App() {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    //this only run once
    auth.onAuthStateChanged((authUser) => {
      // console.log("ttttt", authUser);// console
      if (authUser) {
        //the user logged in the app
        dispatch({
          type: "SET-USER",
          user: authUser,
        });
      } else {
        //user logged out from the app
        dispatch({
          type: "SET-USER",
          user: null,
        });
      }
    });
  }, []);
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/user/payment">
            <PaymentVeryfication />
          </Route>
          <Route path="/Checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
