const { createContext, useContext } = require("react");

const CardsContext = createContext();

const data = require("../utils/data");

const CardsContextProvider = ({ children }) => {
  return (
    <CardsContext.Provider value={{ data }}>{children}</CardsContext.Provider>
  );
};

export default CardsContextProvider;

export const useCards = () => {
  const { data } = useContext(CardsContext).data;

  return { data };
};
