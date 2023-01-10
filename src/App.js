import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import { Fragment } from "react";
import Checkout from "./pages/Checkout";
import LoginPage from "./pages/LoginPage";
import AuthContext from "./components/store/auth-context";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import OrderItem from "./pages/OrderItem";

function App() {
  const authCtx = useContext(AuthContext);
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
          <Route path="/orderItem">
            {authCtx.isLoggedIn && <OrderItem></OrderItem>}
            {console.log(authCtx.isLoggedIn)}
            {!authCtx.isLoggedIn && <Redirect to="/login"></Redirect>}
          </Route>
            <Redirect path="*" to="/"></Redirect>
      </Switch>
    </Fragment>
  );
}

export default App;
