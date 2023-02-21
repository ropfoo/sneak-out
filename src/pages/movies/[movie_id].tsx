import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import { useForm } from "react-hook-form";

export default function MoviePage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ startTime: number; endTime: number }>();

  const { query } = useRouter();
  const movieId = query.movie_id?.toString() ?? "";
  const { data: movie } = trpc.movies.get.useQuery({ id: movieId });
  const { data: session } = useSession();
  const isLoggedIn = !!session?.user;
  // console.log("Movie:", movie);

  const onSubmit = (data: { startTime: number; endTime: number }) => {
    console.log(data);
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_bestv2/${movie?.poster_path}), url(https://www.themoviedb.org/t/p/w533_and_h300_bestv2/${movie?.poster_path})`,
        }}
        className={`h-36 w-full bg-cover bg-center bg-no-repeat`}
      ></div>

      <h1>{movie?.title}</h1>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="text-dark"
            placeholder="start"
            type={"number"}
            {...register("startTime", { required: true })}
          />
          {errors.startTime && <span>This field is required</span>}

          <input
            className="text-dark"
            placeholder="end"
            {...register("endTime", { required: true })}
          />
          {errors.endTime && <span>This field is required</span>}

          <input type={"submit"} />
        </form>
      </div>
    </div>
  );
}
