import './Login.css'

const Login = () => {
  return (
    <form className="loginPage">
    <h1>Sign-in</h1>
    <label for="emailInput">Email</label>
     <input type="text" name="emailInput"></input> 
    <label for="passwordInput">Password</label>
    <input type="text" name="passwordInput"></input>
    <button type="submit" className='loginButton'>Sign In</button>
    <p>By signing, you agree to the eShop website Terms and Conditions of use and sale. Please see our privacy notice, our cookie notice and our interest-based ads notice.</p>
    <button>Create your eShop Account</button>
    </form>
  );
};

export default Login;