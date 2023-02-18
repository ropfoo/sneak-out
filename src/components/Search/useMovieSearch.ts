import { trpc } from "../../utils/trpc";
import useDebounce from "../../hooks/useDebounce";
import { useSearchStore } from "@/src/lib/store";

export function useMovieSearch() {
  const input = useSearchStore((state) => state.input);
  const updateInput = useSearchStore((state) => state.updateInput);

  const debouncedValue = useDebounce<string>(input, 500);

  const searchMoviesQuery = trpc.movies.search.useQuery({
    title: debouncedValue,
  });

  return {
    input,
    updateInput,
    movies: searchMoviesQuery.data,
  };
}
