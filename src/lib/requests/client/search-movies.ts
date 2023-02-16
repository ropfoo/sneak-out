export async function searchMovies(query: string) {
  console.log('fetch search');
  const result = await fetch(`http://localhost:3000/api/search?query=${query}`);
  return await result.json();
}
