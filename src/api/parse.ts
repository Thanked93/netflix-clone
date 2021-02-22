import { Extended, Movie, Runtime } from "../interfaces/Movie";

export const parseResponse = (
  item: any,
  query: string,
  isExtended: boolean
): Movie | null => {
  const {
    id,
    title,
    name,
    original_title,
    original_name,
    release_date,
    first_air_date,
    adult,
    overview,
    credits,
    backdrop_path,
    poster_path,
    vote_average,
    genres,
    created_by,
    episode_run_time,
    number_of_seasons,
    runtime,
    videos,
  } = item;
  if (
    !overview ||
    !(name || original_title || original_name || title) ||
    !(backdrop_path || poster_path) ||
    !vote_average
  )
    return null;
  let runTime: Runtime = {
    total_runTime: NaN,
  };
  let extended: Extended = {
    actors: [],
    genres: [],
    author: [],
    videos: [],
  };
  if (isExtended) {
    extended = {
      actors: credits
        ? credits.cast
            .filter(
              (actor: { known_for_department: string }) =>
                actor.known_for_department === "Acting"
            )
            .map((actor: { name: string }) => actor.name)
        : [],
      genres: genres ? genres.map((genre: { name: string }) => genre.name) : [],
      author: created_by
        ? created_by.map((creator: { name: string }) => creator.name)
        : [],
      videos: videos
        ? videos.results.map((entry: { key: string }) => entry.key)
        : [],
    };
    if (runtime || episode_run_time.length > 0) {
      if (number_of_seasons) {
        runTime = {
          total_runTime: runtime || episode_run_time[0],
          number_of_seasons: number_of_seasons,
        };
      } else {
        runTime = {
          total_runTime: runtime || episode_run_time[0],
        };
      }
    }
  }
  const movie: Movie = {
    id,
    query,
    isSeries: true,
    title: title || name || original_name || original_title,
    overview: overview,
    vote_average,
    image: poster_path || backdrop_path,
    bannerImage: backdrop_path || poster_path,
    adult: adult || 0,
    release_date: release_date || first_air_date,
    runtime: runTime,
    isExtended: isExtended,
    extended: extended,
  };
  return movie;
};
