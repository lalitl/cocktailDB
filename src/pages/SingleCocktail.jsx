import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailPage";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const SingleCocktail = () => {
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  const { id } = useParams();

  const fetchDrink = async () => {
    setLoading(true);
    try {
      const resp = await fetch(`${url}${id}`);
      const data = await resp.json();
      const { drinks } = data;
      if (drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          setCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];

        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        };

        setCocktail(newCocktail);
      } else {
        setCocktail(null);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDrink();
  }, [id]);
  console.log(cocktail);
  if (loading) {
    return <div className="loading"></div>;
  }
  if (!cocktail) {
    return <h2>no cock</h2>;
  }
  const { name, image, info, category, glass, instructions, ingredients } =
    cocktail;
  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {ingredients.map((item, index) => {
              return item ? (
                <span key={index} className="ing">
                  {item}
                </span>
              ) : null;
            })}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleCocktail;
