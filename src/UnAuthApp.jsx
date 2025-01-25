import { useContext, useState } from "react";
import { myloginContext } from "./LoginContext";

const UnAuthApp = () => {
  const [unm, setUnm] = useState("");
  const { login } = useContext(myloginContext);

  return (
    <>
      <h1>Unauthenticated App</h1>
      Enter name:
      <input
        type="text"
        value={unm}
        onChange={(e) => setUnm(e.target.value)}
      />
      <button onClick={() => login(unm)}>Login</button>
    </>
  );
};

export default UnAuthApp;
