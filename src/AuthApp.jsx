import { useContext } from "react";
import { myloginContext } from "./LoginContext";

const AuthApp = () => {
  const { user, logout } = useContext(myloginContext);

  return (
    <>
      <h1>Authenticated App</h1>
      Welcome, {user.name}!
      <br />
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default AuthApp;
