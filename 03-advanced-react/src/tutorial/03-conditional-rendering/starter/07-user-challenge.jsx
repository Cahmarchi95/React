import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "Snow da massa" });
  };

  const LoginSetup = () => {
    return (
      <div>
        <h4>Hello there, {user.name}</h4>
        <button className="btn" onClick={logout}>
          logout
        </button>
      </div>
    );
  };

  const logout = () => {
    setUser(null);
  };

  const LogoutSetup = () => {
    return (
      <div>
        <h4>Please login</h4>
        <button className="btn" onClick={login}>
          login
        </button>
      </div>
    );
  };

  return <div>{user ? <LoginSetup /> : <LogoutSetup />}</div>;
};

export default UserChallenge;
