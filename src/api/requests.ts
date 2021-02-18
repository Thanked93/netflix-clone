const KEY = process.env.REACT_APP_API_KEY;

export interface Request {
  url: string;
  query: string;
  title: string;
  isLarge: boolean;
}

export const NETFLIX_ORIGINALS: Request = {
  query: "tv",
  title: "Netflix Originals",
  url: `/discover/tv?api_key=${KEY}&with_networks=213`,
  isLarge: true,
};
const TOP_RATED: Request = {
  query: "movie",
  title: "Top Rated",
  url: `/movie/top_rated?api_key=${KEY}&language=en-US`,
  isLarge: false,
};
export const ACTION_MOVIES: Request = {
  query: "movie",
  title: "Action Movies",
  url: `/discover/movie?api_key=${KEY}&with_genres=28`,
  isLarge: false,
};

export const COMEDY_MOVIES: Request = {
  query: "movie",
  title: "Comedy Movies",
  url: `/discover/movie?api_key=${KEY}&with_genres=35`,
  isLarge: false,
};
export const HORROR_MOVIES: Request = {
  query: "movie",
  title: "Horror Movies",
  url: `/discover/movie?api_key=${KEY}&with_genres=27`,
  isLarge: false,
};

export const ROMANCE_MOVIES: Request = {
  query: "movie",
  title: "Romances",
  url: `/discover/movie?api_key=${KEY}&with_genres=10749`,
  isLarge: false,
};

export const DOCUMENTARY_MOVIES: Request = {
  query: "movie",
  title: "Documentaries",
  url: `/discover/movie?api_key=${KEY}&with_genres=99`,
  isLarge: false,
};

export const EXTEND_ENTRY = {
  url: `api_key=${KEY}&append_to_response=videos,credits,release_dates`,
};

export const requests: Request[] = [
  NETFLIX_ORIGINALS,
  TOP_RATED,
  ACTION_MOVIES,
  COMEDY_MOVIES,
  ROMANCE_MOVIES,
  HORROR_MOVIES,
  DOCUMENTARY_MOVIES,
];

export const SEARCH_MOVIE = `/search/movie?api_key=${KEY}&query=`;
