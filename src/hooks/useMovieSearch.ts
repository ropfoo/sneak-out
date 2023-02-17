import * as React from 'react';
import { trpc } from '../utils/trpc';
import useDebounce from './useDebounce';

export function useMovieSearch() {
  const [input, setInput] = React.useState('lord of the rings');
  const debouncedValue = useDebounce<string>(input, 500);

  const searchMoviesQuery = trpc.movies.search.useQuery({
    title: debouncedValue,
  });

  return { input, setInput, movies: searchMoviesQuery.data };
}
