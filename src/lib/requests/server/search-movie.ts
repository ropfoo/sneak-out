export async function searchMovies(query: string) {
  const result = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_KEY}&query=${query}`
  );
  return await result.json();
}
