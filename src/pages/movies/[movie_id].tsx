import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";

export default function MoviePage() {
  const { query } = useRouter();
  const movieId = query.movie_id?.toString() ?? "";
  const { data } = trpc.movies.get.useQuery({ id: movieId });
  console.log(data);
  return (
    <main>
      <h1>{data?.title}</h1>
    </main>
  );
}
