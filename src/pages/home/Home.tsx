import React, { useContext } from "react";
import { NETFLIX_ORIGINALS } from "../../api/requests";
import Banner from "../../components/banner/Banner";
import Row from "../../components/row/Row";
import StoreContext from "../../context/StoreContext";
import "./Home.css";

const Home: React.FC = () => {
  const { movieState } = useContext(StoreContext);
  let bigRow = movieState.movies.filter(
    (item) => item.key === NETFLIX_ORIGINALS.url
  )[0];
  let otherRows = movieState.movies.filter(
    (item) => item.key !== NETFLIX_ORIGINALS.url
  );
  if (!bigRow) return null;
  return (
    <div className="home">
      <Banner
        movie={
          bigRow.items[Math.floor(Math.random() * bigRow.items.length - 1)]
        }
      />
      <div className="home__rows">
        <div key={`${0}-${bigRow.title}`} className="home__row">
          <Row itemObject={bigRow} row={0} />
        </div>

        {otherRows.map((movie, i) => {
          return (
            <div
              key={`${i + 1}-${movie.title}`}
              className={i > 0 ? "home__rowSm" : "home__row"}
            >
              <Row itemObject={movie} row={i + 1} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
