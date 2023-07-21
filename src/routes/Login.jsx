import { useState, useEffect,
  // useContext
 } from "react";
import { Link } from "react-router-dom";
// import { loginContext } from "../context";
import toast, { Toaster } from 'react-hot-toast'

const Login = () => {
  // const [login, setLogin] = useContext(loginContext);
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const submitData = () => {
    const userData = document.getElementById('username').value
    const userPassword = document.getElementById('password').value
    setUser(userData)
    setPassword(userPassword)
    // setLogin(false)

    if (userData && userPassword) {
      window.location.href ="/admin"
    } else {
      toast.error('Ingresá los datos correspondientes')
    }
  }

  useEffect(() => {
    console.log({"USERDATA": user, password})
  }, [user, password])
  

  return (
    <>
    <Toaster/>
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
        <button type="button" onClick={()=> submitData()}>Submit</button>
      </div>
      </form>
    </>
  );
};

export default Login;
