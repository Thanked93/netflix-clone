import React from "react";
import ListButton from "../../button/ListButton";
import "./TitleBar.css";

interface TitleBarProps {
  movie: any;
}

const TitleBar: React.FC<TitleBarProps> = ({ movie }) => {
  return (
    <div className="titlebar movie">
      <div className="titlebar__wrapper movie">
        <div className="titlebar_title movie">
          {movie.title || "No Title found"}
        </div>
        <ListButton movie={movie} />
      </div>
    </div>
  );
};

export default TitleBar;
