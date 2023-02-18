import { useMovieSearch } from "./useMovieSearch";

export default function SearchBar() {
  const { input, updateInput } = useMovieSearch();

  return (
    <input
      type="text"
      value={input}
      onChange={(e) => updateInput(e.target.value)}
    />
  );
}
