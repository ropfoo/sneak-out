// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { searchMovies } from '@/src/lib/requests/server/search-movie';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const movieQuery = req.query.query?.toString() ?? '';
  const moviesResult = await searchMovies(movieQuery);

  res.status(200).json(moviesResult);
}
