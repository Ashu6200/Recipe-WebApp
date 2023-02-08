import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import styled from "styled-components";
import ReacipePost from "../components/ReacipePost";

const Home = () => {
  const [search, setSearch] = useState();
  const [show, setShow] = useState(false);
  const [item, setItem] = useState("");
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const searchRecipe = (evt) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);
  return (
    <>
      <Wrapper>
        <div className="h-center">
          <div
            className="searchBar"
            onClick={() => searchRecipe("searchButton")}
          >
            <CiSearch />
          </div>
          <input
            type="text"
            placeholder="Seach..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={searchRecipe}
          />
        </div>
        <div className="home-container">
          {show ? <ReacipePost data={item} /> : "Loading....."}
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  flex-direction: column;
  align-items: center;
  .h-center {
    display: flex;
    align-items: center;
    width: 900px;
    input {
      background-color: #c2bdbd;
      border-radius: 0 40px 40px 0;
      display: flex;
      width: 100%;
      height: 50px;
      border: none;
      outline: none;
      font-size: 15px;
      color: Black;
    }
    .searchBar {
      display: flex;
      background-color: #c2bdbd;
      height: 52px;
      align-items: center;
      justify-content: center;
      padding-left: 10px;
      padding-right: 10px;
      border-radius: 40px 0 0 40px;
      font-size: 25px;
      font-weight: 800;
    }
  }
  .home-container {
    padding-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 60px;
  }
`;
