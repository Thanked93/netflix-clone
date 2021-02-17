export interface Movie {
  id: number;
  title: string;
  adult: boolean;
  overview: string;
  vote_average: number;
}

interface Videos {
  results: Array<string>;
}
