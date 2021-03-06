import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Restaurants from "./Pages/Restaurants/Restaurants";
import Menu from "./Pages/Menu/Menu";
import Header from "./Components/Header/Header";
import Account from "./Pages/Account/Account";
import Checkout from "./Pages/Checkout/Checkout";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Returns from "./Pages/Returns/Returns";
import React from "react";


function App() {
  return (
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Restaurants} />
          <Route path="/restaurant/:restaurantId" component={Menu} />
          <Route path="/account" component={Account} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/returns/:id" component={Returns} />
          <Redirect to="/" />
        </Switch>
      </Router>
  );
}

export default App;
