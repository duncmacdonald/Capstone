import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import QRCode from "./Components/QRCode/QRCode";
import Restaurants from "./Pages/Restaurants/Restaurants";
import Menu from "./Pages/Menu/Menu";
import Header from "./Components/Header/Header";
import Account from "./Pages/Account/Account";


function App() {
  return (
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Restaurants} />
          <Route path="/restaurant/:restaurantId" component={Menu} />
          <Route path="/account" component={Account} />
          <Route path="/qr" component={QRCode} />
        </Switch>
      </Router>
  );
}

export default App;
