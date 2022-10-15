//import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import About from "./About";

// Stripe Public Key
const promise = loadStripe(
  "pk_test_51Lqf8cL9komtFXP5FSQOE1A2m8TMMVBnnxi4HBJMICKLBY5mviQZtSFsPhGqShY6oKfrCnI5LRfWssBkMGoMfjdA00CSzHC95r"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // Will only run once when the App component loads.
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // The user just logged in OR the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM Convention
    // React-Router-Dom is used here to route between pages
    // Switch Component does not work for react-router-dom v6 instead use Routes Component and change the syntax a bit to for v6.
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/orders" element={[<Header />, <Orders />]}></Route>
          <Route path="/checkout" element={[<Header />, <Checkout />]}></Route>
          <Route path="/about" element={[<Header />, <About />]}></Route>
          <Route
            path="/payment"
            element={[
              <Header />,
              <Elements stripe={promise}>
                <Payment />
              </Elements>,
            ]}
          ></Route>
          <Route path="/" element={[<Header />, <Home />]}></Route>
        </Routes>

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    </Router>
  );
}

export default App;
