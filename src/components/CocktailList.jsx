import React from "react";
import Wrapper from "../assets/wrappers/CocktailList";
import { useGlobalConext } from "../context";
import Loading from "./Loading";
import CocktailCard from "./CocktailCard";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalConext();
  
  
  if(loading) {
    return <Loading/>
  }

  if(cocktails.length < 1) {
    return <Wrapper>
      <h4 style={{ textAlign: 'center' }}>No matching cocktails found...</h4>
    </Wrapper>
  }
  return <Wrapper>
    {cocktails.map((item) => {
        return <CocktailCard key={item.id} {...item}/>
    })}
  </Wrapper>;
};

export default CocktailList;
