import React from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
import axios from "axios";

const responseGoogle = (response) => {
  console.log("status", response);
  console.log(`Name: ${response.profileObj.givenName}`);

  axios.post("https://witchfall.herokuapp.com/login", {
    name: response.profileObj.givenName,
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
