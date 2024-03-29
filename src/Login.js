import React from "react";
import "./login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <>
      <div className="login">
        <div className="login-container">
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            }
            alt=""
          />
          <div className="login-text">
            <h1>Sign In to WhatsApp Clone</h1>
          </div>
          <Button onClick={signIn}>SIGN IN WITH GOOGLE</Button>
        </div>
      </div>
    </>
  );
}

export default Login;
