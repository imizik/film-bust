const transformData = (movies) => {
  return movies.map((item) => ({id: item.id, image: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`, value: item.original_title }));
}

export default transformData