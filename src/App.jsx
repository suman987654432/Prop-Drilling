import { useContext } from "react";
import { myloginContext } from "./LoginContext";
import UnAuthApp from "./UnAuthApp";
import AuthApp from "./AuthApp";

const App = () => {
  const { user } = useContext(myloginContext);

  return (
    <>
      <h1>Welcome App..</h1>
      {user.auth ? <AuthApp /> : <UnAuthApp />}
    </>
  );
};

export default App;
