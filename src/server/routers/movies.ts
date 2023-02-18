import { z } from "zod";
import { baseProcedure, router } from "../trpc";

export const moviesRouter = router({
  search: baseProcedure
    .input(
      z.object({
        title: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const searchMoviesResult = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_KEY}&query=${input.title}`
      );
      const movies = await searchMoviesResult.json();
      return movies;
    }),
  get: baseProcedure
    .input(z.object({ id: z.string().min(1) }))
    .query(async ({ input }) => {
      const searchMovieResult = await fetch(
        `https://api.themoviedb.org/3/movie/${input.id}?api_key=${process.env.TMDB_KEY}`
      );
      const movie = await searchMovieResult.json();
      return movie;
    }),
});
