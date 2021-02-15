import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import Preview from "../preview/Preview";

import "./Row.css";
interface RowProps {
  title: string;
  fetchUrl: string;
  row: number;
  savedMovies?: any[];
  isLarge?: boolean;
}

export const Row: React.FC<RowProps> = ({
  title,
  fetchUrl,
  row,
  savedMovies = null,
  isLarge = false,
}) => {
  const [movies, setMovies] = useState<any>([]);
  const [leftArrow, setLeftArrow] = useState<boolean>(false);
  const [rightArrow, setRightArrow] = useState<boolean>(true);

  const scroll = (sign: number) => {
    let x = document.getElementsByClassName("row__previews")[row];
    let step = window.outerWidth / 2;
    x.scrollLeft += step * sign;
  };

  const scrollCheck = (e: any) => {
    let containerElement = document.getElementsByClassName("row__previews")[
      row
    ];
    if (containerElement.scrollLeft === 0) {
      setLeftArrow(false);
    } else {
      if (!leftArrow) setLeftArrow(true);
    }
    let right =
      containerElement.scrollWidth -
      (containerElement.scrollLeft + containerElement.clientWidth) +
      1;
    if (right <= 2) {
      setRightArrow(false);
    } else {
      if (!rightArrow) setRightArrow(true);
    }
  };

  useEffect(() => {
    async function fetch() {
      await axios
        .get(fetchUrl)
        .then((res) => {
          setMovies(res.data.results);
        })
        .catch((err) => {});
    }
    if (savedMovies !== null) {
      setMovies(savedMovies);
    } else {
      fetch();
    }
  }, [fetchUrl, savedMovies]);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__previews" onScroll={scrollCheck}>
        {movies.map((movie: any) => {
          return (
            <Preview
              key={movie.id}
              movie={movie}
              query={
                fetchUrl === requests.fetchNetflixOriginals ? "tv" : "movie"
              }
              isLarge={isLarge}
            />
          );
        })}
        {leftArrow && (
          <div
            className="row__arrowLeft row__button"
            style={{
              height: isLarge ? "300px" : "240px",
              marginBottom: isLarge ? 0 : "60px",
            }}
            onClick={() => scroll(-1)}
          >
            <i className="row__left row__arrow"></i>
          </div>
        )}
        {rightArrow && (
          <div
            className="row__arrowRight row__button"
            style={{
              height: isLarge ? "300px" : "240px",
              marginBottom: isLarge ? 0 : "60px",
            }}
            onClick={() => scroll(1)}
          >
            <i className="row__right row__arrow"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default Row;
