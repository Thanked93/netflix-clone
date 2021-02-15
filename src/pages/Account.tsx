import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ListButton from "../components/button/ListButton";
import Navbar from "../components/navbar/Navbar";
import Preview from "../components/preview/Preview";
import AccountReducerContext from "../reducer/accountReducerContext";
import "./Account.css";
interface AccountProps {}

export const Account: React.FC<AccountProps> = ({}) => {
  const { state } = useContext(AccountReducerContext);
  console.log(state);
  return (
    <>
      <Navbar />
      <div className="account">
        <div>
          <h2 className="account__greeting">Hello {state.name}</h2>
        </div>
        <div className="account__movieList">
          {state.movies.length > 0 ? (
            state.movies.map((movie) => {
              return (
                <div className="account__movie">
                  <Preview
                    movie={movie.movie}
                    query={movie.query}
                    isLarge={true}
                  />
                </div>
              );
            })
          ) : (
            <div>Your movie list is currently empty</div>
          )}
        </div>
        <Link style={{ marginTop: "50px" }} to="/">
          <button className="account__button">
            {state.movies.length > 0 ? "Add More" : "Add Movies"}
          </button>
        </Link>
      </div>
    </>
  );
};

export default Account;
