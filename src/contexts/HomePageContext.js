import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const HomePageContext = createContext();

const HomePageContextProvider = ({ children }) => {
  const [homePage, setHomePage] = useState(true);
  const location = useLocation();

  useEffect(() => {
    location.pathname !== "/" ? setHomePage(false) : setHomePage(true);
  }, [location]);

  return (
    <HomePageContext.Provider value={homePage}>
      {children}
    </HomePageContext.Provider>
  );
};

export default HomePageContextProvider;

export const useHomePage = () => {
  const homePage = useContext(HomePageContext);
  return { homePage };
};
