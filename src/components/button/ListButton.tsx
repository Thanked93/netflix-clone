import React, { useContext } from "react";
import StoreContext from "../../context/StoreContext";
import { ADD, DELETE } from "../../reducer/account/accountReducer";
import "./ListButton.css";

interface ListButtonProps {
  movie: any;
  query: string;
}

const ListButton: React.FC<ListButtonProps> = ({ movie, query }) => {
  const { accountDispatch, accountState } = useContext(StoreContext);
  return (
    <>
      {accountState.movies.filter((savedMovie) => savedMovie.id === movie.id)
        .length > 0 ? (
        <button
          className="listButton remove movie__dummy"
          onClick={() =>
            accountDispatch({ type: DELETE, payload: { id: movie.id } })
          }
        >
          Remove
        </button>
      ) : (
        <button
          className="listButton add  movie__dummy"
          onClick={() =>
            accountDispatch({
              type: ADD,
              payload: { movie: movie, id: movie.id, query: query },
            })
          }
        >
          Add
        </button>
      )}
    </>
  );
};

export default ListButton;
