import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children, ...props }) {
  const token = localStorage.getItem("jwt");
  return (
    <Route {...props}>
      {isLoggedIn ? children : token ? children : <Redirect to={"/"} />}
    </Route>
  );
}

export default ProtectedRoute;
