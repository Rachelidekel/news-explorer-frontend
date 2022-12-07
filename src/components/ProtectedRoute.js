import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({
  isLoggedIn,
  setIsLoginPopupOpen,
  path,
  children,
  ...props
}) {
  useEffect(() => {
    if (path && !isLoggedIn) {
      setIsLoginPopupOpen(true);
    }
  }, [path, isLoggedIn, setIsLoginPopupOpen]);

  const token = localStorage.getItem("jwt");
  return (
    <Route {...props}>
      {isLoggedIn ? children : token ? children : <Redirect to={"/"} />}
    </Route>
  );
}

export default ProtectedRoute;
