import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Store } from "../store/StoreContext";
import logo from "../utils/img1.jpeg";

const Profile = () => {
  const { state } = useContext(Store);
  const {
    wish: { wishItems },
  } = state;
  const { dispatch: ctxDispatch } = useContext(Store);
  const removeItemHandler = (item) => {
    ctxDispatch({
      type: "REMOVE_FROM_WISH",
      payload: item,
    });
    toast.success(
      "You have successfully deleted the recipe to the recipe list!"
    );
  };
  return (
    <>
      <Container>
        <div className="p-conatiner">
          <div className="p-upper">
            <img src={logo} alt="" />
            <div>
              <h3>Ashutosh Kewat</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos veniam optio sed, qui fuga et nulla minus harum
                officiis, quae repellat voluptates culpa, aliquam repellendus
                atque ullam unde. Est, consectetur. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Laborum, obcaecati sed, quam minus
                eos alias atque earum tempora soluta sunt sequi fuga nesciunt
                eveniet similique id veniam iusto animi. Odio!
              </p>
            </div>
          </div>
          <div className="p-lower">
            <h3>Saved Recipe</h3>
            {wishItems.length === 0 ? (
              <h3>You have not Saved any recipe to the recipe list!</h3>
            ) : (
              <>
                {wishItems.map((item) => (
                  <Wrapper key={item.idMeal}>
                    <div className="rp-container">
                      <div className="rp-left">
                        <img src={item.strMealThumb} alt="" />
                      </div>
                      <div className="rp-right">
                        <h3>{item.strMeal}</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Eius, deserunt? Veritatis est officia illum hic
                          nam blanditiis delectus nihil nemo quo? Beatae
                          inventore corrupti nostrum voluptate odit maxime,
                          nobis officia.
                        </p>
                        <h3>Meal Tags</h3>
                        <span>{item.strTags}</span>
                        <Link
                          to={`/recipe/${item.idMeal}`}
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          <button>View</button>
                        </Link>
                        <button onClick={() => removeItemHandler(item)}>
                          Unsave Recipe
                        </button>
                      </div>
                    </div>
                  </Wrapper>
                ))}
              </>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Profile;

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

const Container = styled.div`
  display: flex;
  justify-content: center;
  .p-conatiner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1000px;
    .p-upper {
      display: flex;
      align-items: center;
      gap: 50px;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .p-lower {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
