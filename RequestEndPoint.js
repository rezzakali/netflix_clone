const key = import.meta.env.VITE_TMDB_KEY;

const request = {
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
  trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
  upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
  search: `https://api.themoviedb.org/3/search/company?api_key=${key}&page=1`,
};

export default request;
