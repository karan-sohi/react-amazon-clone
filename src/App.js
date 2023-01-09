import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import { Fragment } from "react";
import Checkout from "./pages/Checkout";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Fragment>
      <Navigation></Navigation>
      <Switch>
        <Route path="/" exact>
          <HomePage></HomePage>
        </Route>
        <Route path="/checkout">
          <Checkout></Checkout>
        </Route>
        <Route path="/login">
          <LoginPage></LoginPage>
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
