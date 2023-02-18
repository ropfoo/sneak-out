import Link from "next/link";

interface SearchResultProps {
  movie: any;
}

export default function SearchResult({ movie }: SearchResultProps) {
  return (
    <div className="flex overflow-hidden rounded-2xl bg-slate-800 text-slate-50">
      <img
        className="w-44"
        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
        alt=""
      />
      <div className="p-4">
        <p className="text-lg font-bold">{movie.title}</p>
        <Link href={`/movies/${movie.id}`}>to movie</Link>
      </div>
    </div>
  );
}
