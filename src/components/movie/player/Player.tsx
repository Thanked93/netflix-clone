import React from "react";
import ReactPlayer from "react-player/lazy";

interface PlayerProps {
  imageUrl: string;
  movieUrl?: string;
}

const Player: React.FC<PlayerProps> = ({ movieUrl, imageUrl }) => {
  if (movieUrl) {
    return (
      <ReactPlayer
        playing={true}
        height="45vh"
        width="100%"
        controls={false}
        url={`https://www.youtube.com/watch?v=${movieUrl}`}
      />
    );
  }
  return (
    <img
      className="movie__previewImg "
      style={{
        width: "100%",
        height: "45vh",
        backgroundColor: "#000",
        objectFit: "contain",
      }}
      src={`https://image.tmdb.org/t/p/original/${imageUrl}`}
      alt=""
    />
  );
};

export default Player;
