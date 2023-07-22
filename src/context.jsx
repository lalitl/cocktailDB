import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = async () => {
    setLoading(true);
    try {
      const resp = await fetch(`${url}${searchTerm}`);
      const data = await resp.json();
      const { drinks } = data;
      if (drinks) {
        const newDrinks = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newDrinks);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm]);
  return (
    <AppContext.Provider
      value={{
        loading,
        setSearchTerm,
        cocktails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalConext = () => {
  return useContext(AppContext);
};

export { AppProvider };
