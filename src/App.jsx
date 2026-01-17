import { useState } from "react";
import "./App.css";
import Login from "./components/Login/Login.jsx";
import Dashboard from "./components/Dashboard.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [personName, setPersonName] = useState("");
  const [personPassword, setPersonPassword] = useState("");
  
  const handleLogin = (name, password) => {
    setPersonName(name);
    setPersonPassword(password);
    setIsLoggedIn(true);
  };

  return (
    <>
      <h1>Uday Shop</h1>
      {isLoggedIn ? (
        <Dashboard personName={personName} personPassword={personPassword} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}
export default App;
