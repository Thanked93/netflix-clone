import React, { useContext } from "react";
import Banner from "../components/banner/Banner";
import Navbar from "../components/navbar/Navbar";
import Row from "../components/row/Row";
import StoreContext from "../context/StoreContext";
import "./Home.css";

const Home: React.FC = () => {
  const { movieState } = useContext(StoreContext);

  return (
    <div className="home">
      <Navbar />
      <Banner />
      <div className="home__rows">
        {movieState.movies.map((movie, idx) => {
          if (movie.isLarge) {
            return (
              <div key={`${idx}-${movie.title}`} className="home__row">
                <Row itemObject={movie} row={idx} />
              </div>
            );
          } else {
            return (
              <div key={`${idx}-${movie.title}`} className="home__row">
                <Row itemObject={movie} row={idx} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Home;
