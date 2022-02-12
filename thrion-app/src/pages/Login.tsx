import React from "react";

const Login = () => {
  return <>
  <div className="log">
  <h1 className="log-in">LOGIN</h1>
  <form>
  <label>Username</label><br/>
                <input type="text" /><br/>
                <label>Password</label><br/>
                <input type="password" /><br/>
                <button>Log In</button>
  </form>
  </div>
  </>
}

export default Login;
