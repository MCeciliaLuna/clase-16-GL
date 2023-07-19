import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const submitData = () => {
    const userData = document.getElementById('username').value
    const userPassword = document.getElementById('password').value
    setUser(userData)
    setPassword(userPassword)

    if (userData && userPassword) {
      window.location.href = "/admin"
    } else {
     alert('Necesitamos tus datos para loguearte')
    }
  }

  useEffect(() => {
    console.table({"USERDATA": user, password})
  }, [user, password])
  

  return (
    <>
      <h1>Login</h1>
      <form>
        <label>
          Username:
          <input type="text" name="username" id="username" required />
        </label>
        <label>
          Password
          <input type="password" name="password" id="password" required />
        </label>
        <div id="bottom-form">
      <Link to="/info">Info</Link>
        <button type="button" onClick={() => submitData()}>Submit</button>
      </div>
      </form>
    </>
  );
};

export default Login;
