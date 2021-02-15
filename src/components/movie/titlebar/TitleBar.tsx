import React from "react";
import ListButton from "../../button/ListButton";
import "./TitleBar.css";

interface TitleBarProps {
  movie: any;
  query: string;
}

const TitleBar: React.FC<TitleBarProps> = ({ movie, query }) => {
  return (
    <div className="titlebar movie">
      <div className="titlebar__wrapper movie">
        <div className="titlebar_title movie">
          {movie?.title ||
            movie?.name ||
            movie?.original_name ||
            "No Title found"}
        </div>
        <ListButton movie={movie} query={query} />
      </div>
    </div>
  );
};

export default TitleBar;
