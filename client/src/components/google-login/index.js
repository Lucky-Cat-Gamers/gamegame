import React from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
import axios from "axios";

const responseGoogle = (response) => {
  console.log("status", response);
  console.log(`Name: ${response.profileObj.givenName}`);

  axios
    .post("/login", {
      name: response.profileObj.givenName,
    })
    .then((resp) => {
      console.log(`RESP: ${resp}`, resp);
      console.log("Login post request successful.");
    });
};

function GoogleAuth() {
  return (
    <GoogleLogin
      clientId="998531405712-oho2gg1cfcehvdmr87bu9htj6u0rqd6s.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default GoogleAuth;
