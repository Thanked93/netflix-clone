import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/MovieList";
import StoreContext from "../../context/StoreContext";
import useFetchToState from "../../customHooks/useFetchToState";
import "./Account.css";
interface AccountProps {}

export const Account: React.FC<AccountProps> = () => {
  const { accountState } = useContext(StoreContext);
  if (!useFetchToState) {
    return <div></div>;
  }
  return (
    <>
      <div className="account">
        <div>
          <h2 className="account__greeting">Hello {accountState.name}</h2>
        </div>

        {accountState.movies.length > 0 ? (
          <MovieList movies={accountState.movies} />
        ) : (
          <div>Your movie list is currently empty</div>
        )}

        <Link style={{ marginTop: "50px" }} to="/">
          <button className="account__button">
            {accountState.movies.length > 0 ? "Add More" : "Add Movies"}
          </button>
        </Link>
      </div>
    </>
  );
};

export default Account;
