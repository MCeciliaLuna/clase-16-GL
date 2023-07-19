const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <form>
        <label>
          Username:
          <input type="text" name="username" id="username" />
        </label>
        <label>
          Password
          <input type="password" name="password" id="password" />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
