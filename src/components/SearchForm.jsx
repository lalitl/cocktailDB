import React, { useEffect, useRef } from "react";
import Wrapper from "../assets/wrappers/SearchForm";
import { useGlobalConext } from "../context";
const SearchForm = () => {
  const { setSearchTerm } = useGlobalConext();
  const searchValue = useRef("");
  useEffect(() => {
    searchValue.current.focus();
  }, []);
  const handleChange = () => {
    setSearchTerm(searchValue.current.value);
  };
  return (
    <Wrapper>
      <div className="form">
        <input
          type="text"
          className="form-input"
          id="name"
          ref={searchValue}
          onChange={handleChange}
        />
        <button className="btn">search</button>
      </div>
    </Wrapper>
  );
};

export default SearchForm;
