import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/userReducer";
import { toast } from "react-toastify";

const Header = () => {
  const userdetails = useSelector((state) => state.user);
  const user = userdetails.user;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
    toast.success("You have logged out");
  };
  return (
    <>
      {user !== null ? (
        <ConatinerH>
          <div className="h-container">
            <div className="h-left">
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <h3>Recipe Book</h3>
              </Link>
            </div>

            <div className="h-right">
              <Link
                to="/profile"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h3>{user.user.username}</h3>
              </Link>
              <button onClick={logoutHandler}>Logout</button>
            </div>
          </div>
        </ConatinerH>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;

const ConatinerH = styled.div`
  .h-container {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.1);
    .h-left {
      display: flex;
      gap: 3px;
      font-size: 15px;
      font-weight: 700;
      font-family: Arial, Helvetica, sans-serif;
      padding-left: 20px;
      h3 {
        margin: 0;
        font-weight: 600;
        color: #55311c;
      }
    }
    .h-center {
      display: flex;
      align-items: center;
      width: 60%;
      input {
        background-color: #c2bdbd;
        border-radius: 0 40px 40px 0;
        display: flex;
        width: 100%;
        height: 50px;
        border: none;
        outline: none;
        font-size: 15px;
        color: white;
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
    .h-right {
      font-weight: bolder;
      padding-left: 20px;
      padding-right: 20px;
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 25px;
      color: black;
      h3 {
        margin: 0;
        font-weight: 600;
        color: #55311c;
      }
      button {
        width: 70px;
        height: 40px;
        border-radius: 20px;
        background-color: red;
        font-size: 15px;
        font-weight: bold;
        border: none;
        outline: none;
        color: white;
      }
    }
  }
`;
