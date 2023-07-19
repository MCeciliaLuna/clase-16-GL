import { useState, useEffect } from "react";

const Login = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const submitData = () => {
    const userData = document.getElementById('username').value
    const userPassword = document.getElementById('password').value
    setUser(userData)
    setPassword(userPassword)

    // if (userData && userPassword) {
    //   window.location.href = "/admin"
    // }
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
        <button type="button" onClick={() => submitData()}>Submit</button>
      </form>

      <a href="/info">Info</a>
    </>
  );
};

export default Login;
