import React from "react";
import ReactPlayer from "react-player/lazy";

interface PlayerProps {
  movie: any;
}

const Player: React.FC<PlayerProps> = ({ movie }) => {
  const key = movie.videos?.results[0]?.key;

  if (key) {
    return (
      <ReactPlayer
        playing={true}
        height="45vh"
        width="100%"
        controls={false}
        url={`https://www.youtube.com/watch?v=${key}`}
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
      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
      alt=""
    />
  );
};

export default Player;
