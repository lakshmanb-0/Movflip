export const api_key = "YOUR_API_KEY";

const requests = {
  fetchPopular: `/movie/popular?api_key=${api_key}&language=en-US&page=1`,
  fetchTrending: `/trending/movie/week?api_key=${api_key}&language=en-US&page=1`,
  fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
  fetchPopularTv: `/tv/popular?api_key=${api_key}&language=en-US&page=1`,
};
export default requests;
