import React, { useState } from "react";
import { Movie } from "../../interfaces/Movie";
import Preview from "../preview/Preview";
import "./Row.css";

interface RowProps {
  itemObject: Movie[];
  title: string;
  row: number;
  isLarge?: boolean;
}

export const Row: React.FC<RowProps> = ({
  itemObject,
  row,
  title,
  isLarge = false,
}) => {
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
  if (!itemObject) return null;
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className={"row__previews"} onScroll={scrollCheck}>
        {itemObject.map((movie: any) => {
          return (
            <Preview
              key={movie.id}
              movie={movie}
              query={movie.query}
              isLarge={isLarge}
            />
          );
        })}
        <div className="empty"></div>
        {leftArrow && (
          <div
            className="row__arrowLeft row__button"
            style={{
              height: isLarge ? "30vh" : "24vh",
              marginBottom: isLarge ? "" : "6vh",
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
              height: isLarge ? "30vh" : "24vh",
              marginBottom: isLarge ? "" : "6vh",
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
