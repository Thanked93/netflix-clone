const KEY = process.env.REACT_APP_API_KEY;

export interface Request {
  url: string;
  query: string;
  title: string;
}

export const NETFLIX_ORIGINALS: Request = {
  query: "tv",
  title: "Netflix Originals",
  url: `/discover/tv?api_key=${KEY}&with_networks=213`,
};
const TOP_RATED: Request = {
  query: "movie",
  title: "Top Rated",
  url: `/movie/top_rated?api_key=${KEY}&language=en-US`,
};
export const ACTION_MOVIES: Request = {
  query: "movie",
  title: "Action Movies",
  url: `/discover/movie?api_key=${KEY}&with_genres=28`,
};

export const COMEDY_MOVIES: Request = {
  query: "movie",
  title: "Comedy Movies",
  url: `/discover/movie?api_key=${KEY}&with_genres=35`,
};
export const HORROR_MOVIES: Request = {
  query: "movie",
  title: "Horror Movies",
  url: `/discover/movie?api_key=${KEY}&with_genres=27`,
};

export const ROMANCE_MOVIES: Request = {
  query: "movie",
  title: "Romances",
  url: `/discover/movie?api_key=${KEY}&with_genres=10749`,
};

export const DOCUMENTARY_MOVIES: Request = {
  query: "movie",
  title: "Documentaries",
  url: `/discover/movie?api_key=${KEY}&with_genres=99`,
};

export const EXTEND_ENTRY = {
  url: `api_key=${KEY}&append_to_response=videos,credits,release_dates`,
};

export const requests: Request[] = [
  NETFLIX_ORIGINALS,
  TOP_RATED,
  COMEDY_MOVIES,
  ACTION_MOVIES,
  HORROR_MOVIES,
  ROMANCE_MOVIES,
  DOCUMENTARY_MOVIES,
];

export const SEARCH_MOVIE = `/search/movie?api_key=${KEY}&query=`;
