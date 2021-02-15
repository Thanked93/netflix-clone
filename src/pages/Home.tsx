import React from "react";
import requests from "../api/requests";
import Banner from "../components/banner/Banner";
import Navbar from "../components/navbar/Navbar";
import Row from "../components/row/Row";

import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Navbar />
      <Banner />
      <div className="home__rows">
        <Row
          fetchUrl={requests.fetchNetflixOriginals}
          title="Netflix Originals"
          isLarge={true}
          row={0}
        />
        <div className="home__subRow">
          <Row fetchUrl={requests.fetchTopRated} title="Top Rated" row={1} />
        </div>
        <div className="home__subRowSm">
          <Row fetchUrl={requests.fetchActionMovies} title="Action" row={2} />
        </div>
        <div className="home__subRowSm">
          <Row fetchUrl={requests.fetchRomanceMovies} title="Romance" row={3} />
        </div>
        <div className="home__subRowSm">
          <Row fetchUrl={requests.fetchHorrorMovies} title="Horror" row={4} />
        </div>
        <div className="home__subRowSm">
          <Row fetchUrl={requests.fetchComedyMovies} title="Comedy" row={5} />
        </div>
        <div className="home__subRowSm">
          <Row
            fetchUrl={requests.fetchDocumentaryMovies}
            title="Documentary"
            row={6}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
