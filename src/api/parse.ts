export const parseResponse = (res: any[]) => {
  let items: any = [];
  res.forEach((item) => {
    if (
      item.id &&
      item.backdrop_path &&
      item.poster_path &&
      (item.title || item.original_title) &&
      item.overview &&
      item.vote_average
    ) {
      items.push(item);
    }
  });
  return items;
};
