import { useState, createContext } from "react";

const myloginContext = createContext();

const LoginContext = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    auth: false,
  });

  const login = (username) => {
    setUser({ name: username, auth: true });
  };

  const logout = () => {
    setUser({ name: "", auth: false });
  };

  return (
    <myloginContext.Provider value={{ user, login, logout }}>
      {children}
    </myloginContext.Provider>
  );
};
export { myloginContext };
export default LoginContext;

