import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ReacipePost = ({ data }) => {
  return (
    <>
      {!data
        ? "Not Found"
        : data.map((item) => {
            return (
              <Wrapper key={item.idMeal}>
                <div className="rp-container">
                  <div className="rp-left">
                    <img src={item.strMealThumb} alt="" />
                  </div>
                  <div className="rp-right">
                    <h3>{item.strMeal}</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eius, deserunt? Veritatis est officia illum hic nam
                      blanditiis delectus nihil nemo quo? Beatae inventore
                      corrupti nostrum voluptate odit maxime, nobis officia.
                    </p>
                    <h3>Meal Tags</h3>
                    <span>{item.strTags}</span>
                    <Link
                      to={`/recipe/${item.idMeal}`}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <button>View</button>
                    </Link>
                  </div>
                </div>
              </Wrapper>
            );
          })}
    </>
  );
};

export default ReacipePost;

const Wrapper = styled.div`
  width: 900px;
  .rp-container {
    width: 100%;
    height: 100%;
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
        height: 300px;
        object-fit: cover;
        border-radius: 20px;
      }
    }
    .rp-right {
      width: 60%;
      display: flex;
      flex-direction: column;
      gap: 20px;
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
