import { useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import { useLogin } from "../store/useLogin";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const login = useLogin((state) => state.login);
  const setLogin = useLogin((state) => state.setLogin);
  const userInputRef = useRef(null)
  const userPasswordRef = useRef(null)

  const submitData = () => {

    if (userInputRef.current.value === 'admin' && userPasswordRef.current.value === 'admin') {
      setLogin(true);
    } else {
      toast.error("Ingresá los datos correspondientes");
    }
  };

  if (login === true) {
    return (<Navigate to="/admin" />)
  }

  return (
    <>
      <Toaster />
      <h1>Login</h1>
      <form>
        <label>
          Username:
          <input type="text" name="username" id="username" ref={userInputRef} required />
        </label>
        <label>
          Password
          <input type="password" name="password" id="password" ref={userPasswordRef} required />
        </label>
        <div id="bottom-form">
          <Link to="/info">Info</Link>
          <button type="button" onClick={() => submitData()}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
