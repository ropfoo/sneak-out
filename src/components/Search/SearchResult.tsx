import Image from "next/image";
import Link from "next/link";

interface SearchResultProps {
  movie: any;
}

export default function SearchResult({ movie }: SearchResultProps) {
  return (
    <Link href={`/movies/${movie.id}`}>
      <div className="flex h-[165px] overflow-hidden rounded-2xl bg-darkgray/40 text-lightgray backdrop-blur-xl ">
        <Image
          className="w-28"
          width={220}
          height={330}
          src={`https://www.themoviedb.org/t/p/w220_and_h330_bestv2/${movie.poster_path}`}
          alt={`${movie.title} thumbnail`}
        />
        <div className="p-4">
          <p className="font-bold">{movie.title}</p>
        </div>
      </div>
    </Link>
  );
}
