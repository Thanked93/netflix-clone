import React, { useState } from "react";
import ListButton from "../button/ListButton";
import Container from "../movie/container/Container";
import "./Preview.css";
interface PreviewProps {
  movie: any;
  query: string;
  isLarge: boolean;
  onlyPreview?: boolean;
}

const Preview: React.FC<PreviewProps> = ({
  movie,
  query,
  isLarge,
  onlyPreview = false,
}) => {
  const [showPreview, setShowPreview] = useState(false);
  const togglePreview = (e: any) => {
    if (!e.target.className.includes("listButton"))
      setShowPreview(!showPreview);
  };
  return (
    <>
      <div
        className={`preview ${onlyPreview ? "" : "scale"}`}
        onClick={(e) => togglePreview(e)}
      >
        <img
          className={isLarge ? "preview__img" : "preview__imgSmall"}
          alt=""
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        />
        <div className={`preview__listButton ${isLarge ? "big" : "small"}`}>
          <ListButton movie={movie} query={query} />
        </div>
      </div>

      {showPreview && (
        <Container movie={movie} showComponent={setShowPreview} query={query} />
      )}
    </>
  );
};

export default Preview;
