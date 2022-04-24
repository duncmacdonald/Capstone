import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import QRCode from "./Components/QRCode/QRCode";
import Restaurants from "./Pages/Restaurants/Restaurants";


function App() {
  return (
      <Router>
        <Switch>
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/qr" component={QRCode} />
        </Switch>
      </Router>
  );
}

export default App;
