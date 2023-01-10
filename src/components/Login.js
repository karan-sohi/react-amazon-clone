import "./Login.css";
import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

const Login = () => {
    const authCtx = useContext(AuthContext)
  const [showLogin, setShowLogin] = useState();
  const enteredEmailRef = useRef();
  const enteredPasswordRef = useRef();
  const history = useHistory();

  const toggleButtons = (event) => {
    event.preventDefault();
    setShowLogin(!showLogin);
  };

  const checkCredentials = (event) => {
    let url;
    event.preventDefault();
    const enteredEmail = enteredEmailRef.current.value;
    const enteredPassword = enteredPasswordRef.current.value;
    if (event.target.innerHTML === 'Login') {
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB9ZyjbYt1M2bsMOHKj_Mq1X_DOYyAuM7w"
    }
    else {
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB9ZyjbYt1M2bsMOHKj_Mq1X_DOYyAuM7w"
    }

    fetch(
      url,
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(res => {
        if (res.ok) {
            return res.json();
        }
        else {
            return res.json().then((data) => {
                const errorMessage = data.error.message;
                throw new Error(errorMessage)
            })
        }
    }).then((data) => {
        authCtx.logIn()
        history.push('/')
    }).catch(err => alert(err.message))
  };

  return (
    <form className="loginPage">
      <h1>Sign-in</h1>
      <label htmlFor="emailInput">Email</label>
      <input type="text" name="emailInput" ref={enteredEmailRef}></input>
      <label htmlFor="passwordInput">Password</label>
      <input type="text" name="passwordInput" ref={enteredPasswordRef}></input>
      <button type="submit" className="loginButton" onClick={checkCredentials}>
        {showLogin ? "Login" : "Create your eShop Account"}
      </button>
      <p>
        By signing, you agree to the eShop website Terms and Conditions of use
        and sale. Please see our privacy notice, our cookie notice and our
        interest-based ads notice.
      </p>
      <button onClick={toggleButtons}>
        {!showLogin ? "Login" : "Create your eShop Account"}
      </button>
    </form>
  );
};

export default Login;
