import * as React from 'react';
import { useQuery } from 'react-query';
import { searchMovies } from '../lib/requests/client/search-movies';
import useDebounce from './useDebounce';

export function useMovieSearch() {
  const [input, setInput] = React.useState('spiderman');
  const debouncedValue = useDebounce<string>(input, 500);

  const searchMoviesQuery = useQuery(['searchResult', debouncedValue], () =>
    searchMovies(input)
  );

  console.log(searchMoviesQuery.data);

  return { input, setInput, data: searchMoviesQuery.data };
}
