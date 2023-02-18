import { useMovieSearch } from "./useMovieSearch";

export default function SearchMoviesBar() {
  const { input, updateInput } = useMovieSearch();

  return (
    <input
      className="rounded-xl px-4 py-3 text-lg font-bold text-slate-600"
      type="text"
      value={input}
      onChange={(e) => updateInput(e.target.value)}
    />
  );
}
