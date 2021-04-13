import "./App.css";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Redirect, Route } from "react-router";
import { NavBar } from "./navbar";

function App() {
  return (
    <>
      <Route
        render={() => {
          if (localStorage.getItem("ribUserId")) {
            return (
              <>
                <NavBar />
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />

      <Route
        path="/login"
        render={() => {
          if (localStorage.getItem("ribUserId")) {
            return <Redirect to="/" />;
          } else {
            return <Login />;
          }
        }}
      />
      <Route
        path="/register"
        render={() => {
          if (localStorage.getItem("ribUserId")) {
            return <Redirect to="/" />;
          } else {
            return <Register />;
          }
        }}
      />
    </>
  );
}

export default App;
