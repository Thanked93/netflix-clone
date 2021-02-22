export interface Movie {
  id: number;
  query: string;
  isSeries: boolean;
  title: string;
  overview: string;
  vote_average: number;
  image: string;
  bannerImage: string;
  adult?: boolean;
  release_date?: string;
  runtime: Runtime;
  isExtended: boolean;
  extended: Extended;
}

export interface Runtime {
  total_runTime: number;
  number_of_seasons?: number;
  runtime_per_episode?: number;
}

export interface Extended {
  actors: string[];
  genres: string[];
  author: string[];
  videos: string[];
}
