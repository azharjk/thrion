import React from "react";

const Login = () => {
  return <>
  <div className="log">
  <form>
  <label className="log-in">Username</label><br/>
                <input type="text" /><br/>
                <label>Password</label><br/>
                <input type="password" /><br/>
                <button>Login</button>
  </form>
  </div>
  </>
}

export default Login;
