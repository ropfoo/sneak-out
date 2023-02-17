import { router } from '../trpc';
import { moviesRouter } from './movies';
import { userRouter } from './user';

export const appRouter = router({
  user: userRouter,
  movies: moviesRouter,
});

export type AppRouter = typeof appRouter;
