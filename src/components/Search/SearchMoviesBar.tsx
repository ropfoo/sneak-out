import { useMovieSearch } from "./useMovieSearch";

export default function SearchMoviesBar() {
  const { input, updateInput } = useMovieSearch();

  return (
    <input
      className="rounded-full px-5 py-3 text-lg font-bold text-dark"
      type="text"
      value={input}
      onChange={(e) => updateInput(e.target.value)}
    />
  );
}
