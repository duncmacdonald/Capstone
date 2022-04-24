import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import QRCode from "./Components/QRCode/QRCode";
import Restaurants from "./Pages/Restaurants/Restaurants";
import Menu from "./Pages/Menu/Menu";


function App() {
  return (
      <Router>
        <Switch>
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/restaurant/:restaurantId" component={Menu} />
          <Route path="/qr" component={QRCode} />
        </Switch>
      </Router>
  );
}

export default App;
