import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";
import { Store } from "../store/StoreContext";

const Recipe = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState("");
  const location = useLocation();
  const recipeId = location.pathname.split("/")[2];
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { wish } = state;
  if (recipeId !== " ") {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals[0]);
      });
  }
  const addToWishHandler = () => {
    const existsItem = wish.wishItems.find((x) => x.id === item.id);
    const quantity = existsItem ? existsItem.quantity : 1;
    if (existsItem) {
      toast.error(
        "Sorry. You have already added the recipe to the recipe list!"
      );
      return;
    }
    ctxDispatch({
      type: "ADD_TO_WISH",
      payload: { ...item, quantity },
    });
    toast.success("You have successfully added the recipe to the recipe list!");
    navigate("/profile");
  };

  return (
    <>
      {!item ? (
        <Wrapper>
          <h3>Loading ...</h3>
        </Wrapper>
      ) : (
        <Wrapper>
          <div className="rp-container">
            <div className="rp-left">
              <img src={item.strMealThumb} alt="" />
            </div>
            <div className="rp-right">
              <h3>{item.strMeal}</h3>
              <h4>Instructions</h4>
              <p>{item.strInstructions}</p>
              <h4>Ingredient and Measure</h4>
              <ul>
                <li>
                  {item.strIngredient1}:{item.strMeasure1}
                </li>
                <li>
                  {item.strIngredient2}:{item.strMeasure2}
                </li>
                <li>
                  {item.strIngredient3}:{item.strMeasure3}
                </li>
                <li>
                  {item.strIngredient4}:{item.strMeasure4}
                </li>
                <li>
                  {item.strIngredient5}:{item.strMeasure5}
                </li>
                <li>
                  {item.strIngredient6}:{item.strMeasure6}
                </li>
                <li>
                  {item.strIngredient7}:{item.strMeasure7}
                </li>
                <li>
                  {item.strIngredient8}:{item.strMeasure8}
                </li>
              </ul>
              <button onClick={addToWishHandler}>Save Recipe</button>
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default Recipe;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  .rp-container {
    width: 1200px;
    display: flex;
    border-radius: 20px;
    padding: 20px;
    background-color: #efedee;
    align-items: center;
    gap: 20px;
    .rp-left {
      width: 40%;
      img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        border-radius: 20px;
      }
    }
    .rp-right {
      width: 60%;
      h3 {
        margin: 0;
        font-weight: 600;
        color: #55311c;
      }
      p {
        font-size: 15px;
        font-weight: 600;
      }
      button {
        width: 100%;
        height: 40px;
        border-radius: 20px;
        outline: none;
        border: none;
        background-color: #55311c;
        color: white;
        font-size: 15px;
        font-weight: 600;
      }
    }
  }
`;
